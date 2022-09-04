from django.db import models
from django.utils import timezone


class Code(models.Model):
    code = models.TextField()
    name = models.CharField(max_length=20)
    language = models.CharField( max_length=20)
    arg = models.TextField()