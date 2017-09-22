
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { Verse } from 'models';

const fs = require('fs');
const _ = require('underscore');

function populateQuran() {
    
    console.log("populateQuran");
    const verses = require('../assets/verses.json');

    verses.forEach( function(element) {
        const doc = new Verse();
        doc.index = element.index;
        doc.surah = element.surah;
        doc.verse = element.verse;
        doc.text = element.text;
        doc.translation = element.translation;
        doc.save(function(err, doc) {
            console.log(doc);
        });
    });
    /**
        fs.readFile('./src/assets/ar-quran.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var lines = data.split('\n');
        _.each(lines, function(row, idx) {
            const members = row.split('|');
            const _surah = parseInt(members[0]);
            const _verse = parseInt(members[1]);
            const _text = members[2];
            var doc = {};
            if (idx && _surah && _verse && _text) {
                doc.index = idx;
                doc.surah = _surah;
                doc.verse = _verse;
                doc.text = _text;
                verses.push(doc);
            }
            var doc = new Verse();
            doc.index = idx;
            doc.surah = _surah;
            doc.verse = _verse;
            doc.text = _text;
            doc.save(function(err, doc) {
                console.log(members);
            });
        });
        
        fs.readFile('./src/assets/en-quran.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            var lines = data.split('\n');
            _.each(lines, function(row, idx) {
            const members = row.split('|');
            const _translation = members[2];

            const verse = quran.find(function (element) {
                                    return element.index === idx;
                                });
            if (verse) {
                verse.translation = _translation;
                verses.push(verse);
            }
            Verse.findOne({index: idx}, function (err, doc) {
                doc.translation = _translation;
                doc.save(function(err, doc) {
                        console.log(members);
                    });
                });
            });
            fs.writeFile("./src/assets/ar-quran.json", JSON.stringify(verses), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    
                    console.log("The file was saved!");
                });
        });
     */
}; 

export { populateQuran };