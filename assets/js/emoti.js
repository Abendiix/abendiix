var rEmojiArray = ['🥑', '🍆', '🥔', '🌽', '🥕', '🌶️', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🥜', '🫘'
                    , '🌰', '🫚', '🫛', '🍞', '🥐', '🥖', '🫓', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖'
                    , '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆'
                    , '🥚', '🍳', '🥘', '🍲', '🫕', '🥗', '🍿', '🧈', '🧂', '🥫', '🍝', '🍱', '🍘'
                    , '🍙', '🍚', '🍛', '🍜', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠'
                    , '🥡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮'
                    , '🍯', '🥛', '☕', '🫖', '🍵'];

function randomEmoji()
{
    var rEmojiChosen = rEmojiArray[Math.floor((Math.random() * 84))];

    return rEmojiChosen;
}

document.getElementById("emoti").innerHTML = '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ' + randomEmoji();