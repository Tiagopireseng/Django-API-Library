from django.contrib import admin

from .models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'author',
                    'publication_date', 'number_pages')
    search_fields = ('name', 'category', 'author',
                     'publication_date', 'number_pages')

# Register your models here.


admin.site.register(Book, BookAdmin)
