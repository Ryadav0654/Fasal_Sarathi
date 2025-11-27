import { z } from "zod";

export const predictionSchema = z.object({
  Temperature: z.coerce.number().min(0, "Temperature is required"),
  Humidity: z.coerce.number().min(0, "Humidity is required"),
  Moisture: z.coerce.number().min(0, "Moisture is required"),
  Soil_Type: z.string().min(1, "Soil Type is required"),
  Crop_Type: z.string().min(1, "Crop Type is required"),
  PresentN: z.coerce.number().min(0, "Present N is required"),
  PresentP: z.coerce.number().min(0, "Present P is required"),
  PresentK: z.coerce.number().min(0, "Present K is required"),
});
