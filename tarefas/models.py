from django.db import models

class Tarefa(models.Model):
    titulo= models.CharField(max_length=200)
    concluida= models.BooleanField(default=False)
    criada_em= models.DateTimeField(auto_now_add=True)
    
    
    class Meta:
        ordering = ['-criada_em']
        
    def __str__(self):
        return self.titulo
    