from django.db import models


class Category(models.Model):
    categoryName = models.CharField(max_length=64, null=False)
    categoryDesc = models.TextField()

    def __str__(self):
        return self.categoryName


class Photo(models.Model):
    photo = models.ImageField(upload_to='media/', default=None, blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class Info(models.Model):
    companyName = models.CharField(max_length=64, null=False)
    phoneNum = models.CharField(max_length=12, null=False)
    email = models.CharField(max_length=64, null=False)
    aboutMe = models.TextField()
    aboutSession = models.TextField()
    address = models.TextField()
    offerName = models.CharField(max_length=64, null=False)
    offerDesc = models.TextField()
    offerPrice = models.CharField(max_length=64, null=False)


class MenuItems(models.Model):
    item = models.CharField(max_length=64, null=False)
    description = models.TextField()
