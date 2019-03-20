from django.shortcuts import render
from django.views import View
# Create your views here.


class Pendataan(View):
    templatename = 'pendataan/index.html'

    def get(self, request):
        context = {
            'judul': 'Form Pendataan',
        }
        return render(request, self.templatename, context)
