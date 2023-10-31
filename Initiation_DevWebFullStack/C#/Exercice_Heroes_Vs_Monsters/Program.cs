﻿using Heroes_Vs_Monsters;

#region Énoncé :
/*
    Bienvenue dans la forêt de « Shorewood », forêt enchantée du pays de « Stormwall ».

    Dans cette forêt, se livre un combat acharné entre les héros d’une part et les monstres d’autre part.
    Notre rôle est de donner vie à cette forêt au travers d’un programme écrit en console reprenant tous
    les concepts orientés objets vu au cours.

    Décrivons, un peu ce monde, nous retrouvons deux familles de personnages, les héros : Humain ou
    nain et les monstres : Loup, Orque ou dragonnet.

    Chaque personnage possède différentes caractéristiques :
         Endurance(End),
         Force(For),
         Points de vie (PV)

    La force et l’endurance sont calculées à la création du personnage en lançant, pour chacune d’elles,
    quatre dé 6 faces et en n’en reprenant que les 3 meilleurs.
    Les points de vie sont déterminés par l’endurance additionnée avec le modificateur basé sur
    l’endurance.

    Les personnages ont une action Frappe. Lorsqu’un personnage frappe sur un autre, les dégâts sont
    déterminés par le jet d’un dé à 4 faces auquel on ajoute un modificateur basé sur la caractéristique
    de Force. Une fois calculé, les dégâts sont retirés des points de vies de la cible.
    Les héros en tuant les monstres vont les dépouiller de leur richesse (Or et/ou Cuir), 
    qu’ils vontstocker sans limite.

    Après chaque combat les héros se reposent et restaurent leurs points de vie et affronte le monstre
    suivant jusqu’à leur mort.

    Nous avons deux types de héros, les humains qui ont +1 aux caractéristiques de Force et d’Endurance
    et les nains qui ont plus 2 en Endurance.

    Ensuite nous avons les monstres :
         Les loups :
            o Ils peuvent être dépecés (donne du cuir).
         Les orques :
            o Ils ont +1 en force
            o Ils ont de l’or
         Les dragonnets :
            o Ils ont +1 en endurance
            o Ils ont de l’or
            o Ils peuvent être dépecés (donne du cuir).

    Contrainte :
         La force et l’endurance sont des propriétés en lecture seule.
         La propriété PV est
        (Si les délégués ont été vu)
            « private » aussi bien en lecture et en écriture.
        (sinon)
            en lecture seule.
         Les bonus d’endurance et de force offerts par les classes (Humain, Nain, Orque et Dragonnet)
          ne doivent pas modifier la caractéristique de base du personnage.
         La classe dé contient deux propriétés en lecture seule Minimum et Maximum ainsi qu’une
          méthode Lance qui retourne un entier aléatoire.
*/
#endregion

#region Exercice supplémentaire :
/*
    Prévoir une zone de jeu de 15 sur 15, contenant une 10aine de monstres espacés d’au moins de 2
    cases (horizontale et verticale) les uns des autres.

    Pour ce faire, ajouter aux personnages deux propriétés X et Y qui vont déterminer la position de
    chaque personnage sur le plateau. Leur position est connue à la création.

    Les monstres sont cachés et n’apparaissent qu’une fois le combat commencé.
    Le combat commencera automatiquement lorsque le héros se positionnera à côté, horizontalement
    ou verticalement, d’un monstre.

    Le Héro devra s’afficher par un H, les monstres s’afficheront avec un L pour loup, un O pour orque et
    un D pour dragonnet.

    Leu jeu s’arrête lorsqu’il n’y a plus de monstres sur la carte ou que le héros meurt.
*/
#endregion


Personnages marc = new Personnages(Niveau.addition(), Niveau.addition(), Niveau.addition());



Console.WriteLine($"{marc.vie} ma vie \n{marc.endurance} mon endurance \n{marc.force} ma force");   
