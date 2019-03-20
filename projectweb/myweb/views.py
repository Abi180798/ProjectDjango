from django.shortcuts import render
from django.views.generic import TemplateView


def index(request):
    context = {
        'judul': 'Selamat Datang',

    }
    return render(request, 'index.html', context)


class Home(TemplateView):
    templatename = 'index.html'

    def get(self, request):
        context = {
            'judul': 'Selamat Datang di Django',
        }
        return render(request, self.templatename, context)
