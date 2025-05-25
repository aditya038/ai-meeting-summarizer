from django.urls import path
from .views import UploadAudioView

urlpatterns = [
    path('upload-audio/', UploadAudioView.as_view(), name='upload-audio')
]
