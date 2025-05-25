from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
import whisper
import os
from django.core.files.storage import default_storage
from .gemini import get_summary_from_gemini

class UploadAudioView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        audio = request.FILES['audio']
        file_path = default_storage.save(f"audio/{audio.name}", audio)

        # Transcribe using Whisper
        model = whisper.load_model("base")
        result = model.transcribe(default_storage.path(file_path))
        transcript = result['text']

        # Get summary from Gemini
        summary = get_summary_from_gemini(transcript)

        return Response({ "summary": summary })
