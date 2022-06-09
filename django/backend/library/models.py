from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publication_date = models.DateField()
    number_pages = models.IntegerField()

    def __str__(self):
        return self.name