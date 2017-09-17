
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { Verse } from 'models';

const fs = require('fs');
const _ = require('underscore');

function populateQuran() {
    
    console.log("populateQuran")
    
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
            Verse.findOne({index: idx}, function (err, doc) {
                doc.translation = _translation;
                doc.save(function(err, doc) {
                        console.log(members);
                    });
                });
            })
        });
    });
}; 

export { populateQuran };