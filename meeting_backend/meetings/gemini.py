import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key="AIzaSyBk6VcbEGlc5aib1urJafIjZ9QaI5G8VcQ")

def get_summary_from_gemini(transcript):
    model = genai.GenerativeModel('gemini-2.0-flash')
    prompt = f"Summarize the following meeting transcript:\n\n{transcript}"
    response = model.generate_content(prompt)
    return response.text
