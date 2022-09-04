from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
import os
LEXERS = [item for item in get_all_lexers() if item[1]]
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])


class Snippet(models.Model):
    name = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    language = models.CharField(max_length=10)
    # def save(self, *args, **kwargs):
    #     if self.language == 'py':
            
    #     elif self.language == 'java':
    #         pass
    #     else :
    #         pass
    #     super(Snippet, self).save(*args, **kwargs)    
class Output(models.Model):
    output = models.TextField(null=True)





def runpy(code,arg):
    py = open("python-docker/code.py", "w")
    py.write(code)
    py.close()
    dk = open("python-docker/Dockerfile", "w")
    dk.write('''FROM python:3.8-slim-buster \nWORKDIR /app \nCOPY code.py ./ \nCMD [ "python3", "code.py" , "''' + arg +'''"]''')
    dk.close()
    os.system("sudo docker build --tag python-docker ./python-docker/")
    stream = os.popen('sudo docker run python-docker')
    output = stream.read()
    return output
def runjava(code,arg):
    jv = open("java-docker/run.java", "w")
    jv.write(code)
    jv.close()
    dk = open("java-docker/Dockerfile", "w")

    dk.write('''FROM openjdk\nWORKDIR /var/www/java\nCOPY . /var/www/java\nRUN javac run.java\nCMD ["java", "run" ,"'''+arg+'''"]''')
    dk.close()
    os.system("sudo docker build --tag java-docker ./java-docker/")
    stream = os.popen('sudo docker run java-docker')
    output = stream.read()
    return output
