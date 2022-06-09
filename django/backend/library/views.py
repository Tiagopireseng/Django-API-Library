from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book


# Create your views here.

class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class BookqueryList(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = book.objects.all()
        username = self.request.query_params.get('category')
        if username is not None:
            queryset = queryset.filter(purchaser__username=username)
        return queryset
