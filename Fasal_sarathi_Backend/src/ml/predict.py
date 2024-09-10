import sys
import joblib
import json
import numpy as np
import pandas as pd
import os
current_dir = os.path.dirname(os.path.abspath(__file__))

# Load models, encoders, and scaler
xgb_classifier = joblib.load(os.path.join(current_dir, 'xgboost_classifier.pkl'))
catboost_model = joblib.load(os.path.join(current_dir, 'catboost_regressor.pkl'))
soil_type_encoder = joblib.load(os.path.join(current_dir, 'soil_type_encoder.pkl'))
crop_type_encoder = joblib.load(os.path.join(current_dir, 'crop_type_encoder.pkl'))
fertilizer_name_encoder = joblib.load(os.path.join(current_dir, 'fertilizer_name_encoder.pkl'))
scaler = joblib.load(os.path.join(current_dir, 'scaler.pkl'))

def main():
    # print("this is hit ")
    if len(sys.argv) > 1:
        # Parse the JSON string argument
        data_json = sys.argv[1]
        data = json.loads(data_json)
        
        # Convert to DataFrame with an index
        input_df = pd.DataFrame([data])
        
        # Transform categorical features
        input_df['Soil Type'] = soil_type_encoder.transform(input_df['Soil Type'])
        input_df['Crop Type'] = crop_type_encoder.transform(input_df['Crop Type'])
        
        # Features to scale
        features_to_scale = input_df[['Temparature', 'Humidity', 'Moisture', 'Present N', 'Present P', 'Present K']]

        # Scale features
        scaled_features = scaler.transform(features_to_scale)
        
        # Make predictions
        fertilizer_name_prediction = xgb_classifier.predict(scaled_features)
        fertilizer_name = fertilizer_name_encoder.inverse_transform(fertilizer_name_prediction)[0]
        
        # Handle numpy.ndarray and convert to native Python types
        fertilizer_quantity_prediction = catboost_model.predict(scaled_features)
        if isinstance(fertilizer_quantity_prediction, np.ndarray):
            fertilizer_quantity_prediction = fertilizer_quantity_prediction.item()  # Convert to native Python type
        
        result = {
            'fertilizer_name': fertilizer_name,
            'fertilizer_quantity': round(float(fertilizer_quantity_prediction), 2)  # Convert to float before rounding
        }
        print(json.dumps(result))
    else:
        print(json.dumps({'error': 'No arguments provided'}))

if __name__ == "__main__":
    main()
