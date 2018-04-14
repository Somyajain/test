# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Userdata',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('Bitcoin', models.IntegerField(default=0)),
                ('Ethereum', models.IntegerField(default=0)),
                ('Ripple', models.IntegerField(default=0)),
                ('Bitcoin_Cash', models.IntegerField(default=0)),
                ('Litecoin', models.IntegerField(default=0)),
                ('Cardano', models.IntegerField(default=0)),
                ('NEO', models.IntegerField(default=0)),
                ('Stellar', models.IntegerField(default=0)),
                ('EOS', models.IntegerField(default=0)),
                ('user', models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
