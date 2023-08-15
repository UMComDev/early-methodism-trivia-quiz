// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "",
        "results": "<h3>Your Score and More</h3><p>Thanks for taking our quiz. Take a moment to review the <a href='http://www.umc.org/who-we-are/complete-answers-to-the-womens-history-quiz' target='_blank'>complete answers to the Women’s History Quiz</a>. We encourage you to share the quiz with friends and family too.</p>",
        "level1":  "<table border='0'><tr><td><strong>8-10 correct:</strong></td><td style='padding: 10px;'><div align='center' style='font-weight: bold; font-size: 1.4em;'>U</div></td><td><strong>Ultimate understanding</strong></td></tr><tr><td>4-7 correct:</td><td><div align='center'>M</div></td><td>Moving toward perfection. Just a few misses!</td></tr><tr><td>0-3 correct:</td><td><div align='center'>C</div></td><td>Could use more study on the subject</td></tr></table>",
        "level2":  "<table border='0'><tr><td>8-10 correct:</td><td style='padding: 10px;'><div align='center'>U</div></td><td>Ultimate understanding</strong></td></tr><tr><td><strong>4-7 correct:</strong></td><td style='padding: 10px;'><div align='center' style='font-weight: bold; font-size: 1.4em;'>M</div></td><td><strong>Moving toward perfection. Just a few misses! </strong></td></tr><tr><td>0-3 correct:</td><td style='padding: 10px;'><div align='center'>C</div></td><td>Could use more study on the subject</td></tr></table>",
        "level3":  "<table border='0'><tr><td>8-10 correct:</td><td style='padding: 10px;'><div align='center'>U</div></td><td>Ultimate understanding</strong></td></tr><tr><td>4-7 correct:</td><td style='padding: 10px;'><div align='center' >M</div></td><td>Moving toward perfection. Just a few misses!</td></tr><tr><td><strong>0-3 correct:</strong></td><td style='padding: 10px;'><div align='center' style='font-weight: bold; font-size: 1.4em;'>C</div></td><td><strong>Could use more study on the subject</strong></td></tr></table>"
        // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Sentences constructed in active voice are usually clearer for your readers. In active voice, the subject performs the action stated by the verb. In passive voice, the subject is acted upon by the verb. Which of the following sentences is not an example of passive voice?",

            "a": [
                {"option": "a.	The pastor preached a long sermon.",  "correct": false},
                {"option": "b.	A long sermon was preached by the pastor.",  "correct": false},
                {"option": "c.	The congregation was put to sleep by the pastor’s long sermon.",  "correct": true} // no comma here
            ],
            "learnMore": "<strong>Answer: a</strong>. The pastor was the one performing the action. We’re sure everyone stayed awake for the whole thing." // no comma here
        },
        { // Question 2
            "q": "Which sentence uses the correct form of its/it’s?",
            "a": [
                {"option": "a.	Here is a church. Here is its steeple. Open the door and see all its people.",         "correct": true},
                {"option": "b.	Every year, a church finds out whether its keeping it’s pastor.",       "correct": false},
                {"option": "c.	If its Sunday morning, its time for church.",   "correct": false} // no comma here
            ],
            "learnMore": "<strong>Answer: a</strong>. Write <em>its</em> when you want the possessive version. Use <em>it’s</em> when you mean a contraction for \"it is\" or \"it has.\"" // no comma here
        },
        { // Question 3
            "q": "3.	The woman ________ bought that house will have to spend a fortune on renovations.",
            "a": [
                {"option": "who",  "correct": false},
                {"option": "that",  "correct": false} // no comma here
            ],
            "learnMore": "Answer: a. \"Who\" is the pronoun used for references to human beings and for animals if the animal has a name. So, \"The dog that swam across the river almost drowned\" is correct. But, \"Rover, who swam across the river, almost drowned.\"" // no comma here
        },
        { // Question 4
            "q": "True or false: \"Punctuation always goes inside the quote marks.\"",
            "a": [
                {"option": "True",                              "correct": true},
                {"option": "True",                              "correct": true},
                {"option": "True",                              "correct": true},
                {"option": "All of the above.",                 "correct": true} //no comma here
            ],
            "learnMore": "Answer: d. Seriously, don’t place punctuation outside quote marks. We don’t even joke about this." // no comma here
        },
        { // Question 5
            "q": "What is \"alphabet soup?\"",
            "a": [
                {"option": "a.	A tasty meal",                     "correct": false},
                {"option": "b.	Overuse of acronyms and abbreviations in writing.",                     "correct": false},
                {"option": "c.	All of the above",                    "correct": true} // no comma here
            ],
            "learnMore": "<strong>Answer: c</strong>. Alphabet soup is great for lunch, but not for writing. Churchspeak is rife with acronyms: BOOM, SPRC, UMC, GCFA, UMCOR. Don’t assume your readers are as familiar with these terms as you are. Spell them out, at least the first time they’re mentioned." // no comma here
        },
        { // Question 6
            "q": "What is the most significant date in U.S. history?",
            "a": [
                {"option": "a.	Dec. 21, 1620: Pilgrims first set foot on land in America.",   "correct": false},
                {"option": "b.	July 4, 1776: U.S. declares independence from Britain.",   "correct": false},
                {"option": "c.	April 16, 2010: Associated Press Stylebook changes its spelling of \"Web site\" to \"website.\"",       "correct": false},
                {"option": "d.	All dates are equally significant.",     "correct": true} //no comma here
            ],
            "learnMore": "<strong>Answer: d</strong>. We’re joking — a little — but the changing of \"Web site\" might as well have been the moon landing for word nerds. The Associated Press Stylebook is probably the most popular reference book in the journalism world. It offers a basic reference to grammar, punctuation and principles of reporting, including many definitions and rules for usage as well as styles for capitalization, abbreviation, spelling and numerals. The AP’s favoring of \"Web site\" was a longtime pet peeve for writers who disagreed." // no comma here
        },
        { // Question 7
            "q": "Which is the proper selection to denote an item that belongs to \"them?\"" ,
            "a": [
                {"option": "There",     "correct": false},
                {"option": "Their",     "correct": true},
                {"option": "They're",    "correct": false} // no comma here
            ],
            "learnMore": "<strong>Answer: b</strong>. \"They’re\" is short for \"they are.\" \"Their\" indicates possession (the plural possessive is \"theirs\" – no apostrophe). \"There\" indicates place. Same with \"you’re/your\" and \"who’s/whose.\" And you don’t \"loose\" your car keys, you \"lose\" them. (Well, we hope you don’t do that, either.)  
            "

        },
        { // Question 8
            "q": "Which sentence is correct?",
            "a": [
                {"option": "My friends and I went on the mission trip.",          "correct": true},
                {"option": "Me and my friends went on the mission trip.",          "correct": false},
                {"option": "The bishop invited John and I to go on the mission trip.",     "correct": false} // no comma here
            ],
            "learnMore": "<strong>Answer: a</strong>. \"I\" is a subject pronoun, performing the action in the sentence, whereas \"me\" is an object pronoun, receiving the action. In examples such as those above, a good test is to drop the other person’s name and see how the remaining sentence sounds. \"Me went on the mission trip\" or \"The bishop invited I\" don’t sound right, methinks." // no comma here
        },
        { // Question 9
            "q": "Which sentence has the correct usage of less/fewer?",
            "a": [
              {"option": "She was fewer than 60 years old. ",                "correct": false},
              {"option": "Less than 10 people applied for the job.",     "correct": false},
              {"option": "There was less than $20 in the offering plate",      "correct": true} // no comma here
            ],
            "learnMore": "<strong>Answer: c</strong>.  In general, use fewer for individual items, less for bulk or quantity." // no comma here
        },
        { // Question 10
            "q": "What does decimate mean?",
            "a": [
                {"option": "a.	To destroy something",                  "correct": false},
                {"option": "b.	To guess your church’s apportionment amount",                 "correct": false},
                {"option": "c.	To eliminate a tenth of something",            "correct": true} // no comma here
            ],
            "learnMore": "<strong>Answer: c</strong>.  It’s common to use decimate when describing total destruction, but that’s not technically correct. Think of a decimation (taking a tenth) as the opposite of a tithe (giving a tenth). Example: Don’t decimate the church budget; tithe to the ministry." // no comma here
        },
        { // Question 11
            "q": "Which sentence is correct?",
            "a": [
                {"option": "a.	I’m going to lay down for a nap.",          "correct": false},
                {"option": "b.	The dog lies in the grass.",          "correct": true,
                {"option": "c.	The Bible lays on the pulpit.",     "correct": false} // no comma here
            ],
            "learnMore": "<strong>Answer: b</strong>. The action word is \"lay,\" and requires an object to receive the action; \"lie\" does not. You lay something down and people lie down by themselves. (Note: In this usage, \"lie\" is not referring to telling an untruth.)" // no comma here
        },
        { // Question 12
            "q": "The welcoming party had a positive ________ on the new pastor.",
            "a": [
              {"option": "a.	effect ",                "correct": true},
              {"option": "b.	affect",      "correct": false} // no comma here
            ],
            "learnMore": "<strong>Answer: a</strong>.  In general, \"affect\" is a verb and \"effect\" is a noun. To affect something means to have an influence on it, and an effect is a result. So if you affect something, it will have an effect. However, \"effect\" can be used as a verb to describe the act of bringing about something, such as \"effecting change.\"" // no comma here
        }, 
        { // Question 13
            "q": "13.	Which sentence is correct?",
            "a": [
                {"option": "a. Matthew, Mark, Luke and John compose the Gospels.",                  "correct": false},
                {"option": "b. The United Methodist Social Principles are comprised of six categories.",                 "correct": false},
                {"option": "c. The United Methodist Hymnal is composed of (pun intended!) about 600 hymns. ",            "correct": true} // no comma here
            ],
            "learnMore": "<strong>Answer: c</strong>.  The whole comprises the parts, but the whole is composed of the parts. The United Methodist Hymnal comprises many hymns and prayers. (And many of the hymns were composed by Charles Wesley … but that’s for a different quiz.) Think of “comprises” as a short way of saying “consists of.” If you see “is comprised of” or “are comprised of,” then the sentence should be revised. " // no comma here
        }// no comma here
    ]
};
