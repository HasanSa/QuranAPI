QuranAPI
============

My first  attempt at a REST API for the Holy Quran. I know that a Quran API already exists but I wished to learn some REST API stuff and also just make a Quran API for my own future projects. Open to suggestions and changes.

Requirements
=================

-nodejs

-mongodb service running

Usage
===================
Run the command from the command line:

1- npm install

2- npm run dev

3- Go to your browser and type localhost:8080

4- Type in any of the paths from the API below after the url

So for example to get the surah 3, verse 2 you would do:

localhost:8080/surah/3/2

API
===============================

Note that the language parameter is optional and set to Arabic by default. Currently English is the only
other language available.

Get all verses

/all/language

Get the verses for the given surah

/surah/SurahNumber 

Get the verse by surah and verse number:

/find/SurahNumber/VerseNumber   

Get the verse by index (0 being the first verse and 6236 being the last)

/index/IndexNumber

Get the verse in the range of two indices

/range/From/To

Get all verses that match the search term

/search/term

Get a random verse

/random/


TODO
=================================

-Add more languages

-Add more functions

KNOWN ISSUES
===================================

-Bismillah is not present in the translation
(which I assume was intentionally by the authors
who made the original .txt file)


Acknowledgements
===============================

Thanks to Tanzil.info for the English translation database

