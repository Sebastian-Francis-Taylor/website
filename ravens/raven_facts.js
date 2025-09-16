const stringList = [
    "Did you know? Ravens are highly intelligent and can solve complex puzzles.",
    "Did you know? Ravens can mimic human speech, much like parrots.",
    "Did you know? A group of ravens is called an 'unkindness' or a 'conspiracy.'",
    "Did you know? Ravens can recognize human faces and remember them for years.",
    "Did you know? Ravens often work together in groups to hunt or solve problems.",
    "Did you know? Ravens are known to play games, such as sliding down snowy hills.",
    "Did you know? Ravens can imitate other animal sounds, including wolves and foxes.",
    "Did you know? Ravens are known to 'call' wolves to carcasses, which they then scavenge.",
    "Did you know? Ravens are monogamous and usually mate for life.",
    "Did you know? In Norse mythology, Odin had two ravens, Huginn and Muninn, representing thought and memory.",
    "Did you know? Ravens have been observed using tools in the wild.",
    "Did you know? Ravens can engage in 'trade' by exchanging objects with humans.",
    "Did you know? Ravens have a lifespan of up to 40 years in captivity and about 10-15 years in the wild.",
    "Did you know? Ravens are excellent at imitating mechanical sounds like car alarms.",
    "Did you know? Ravens are among the few animals known to perform rituals, such as holding 'funerals' for dead companions.",
    "Did you know? Their wing span can reach up to 4 feet (1.2 meters).",
    "Did you know? Ravens are larger than crows and have wedge-shaped tails.",
    "Did you know? Ravens can mimic the calls of other bird species to confuse them.",
    "Did you know? Ravens are found in a variety of habitats, from deserts to mountains.",
    "Did you know? Ravens are highly adaptable and thrive in urban environments.",
    "Did you know? Ravens can play 'pranks' on other animals, like teasing dogs or stealing food.",
    "Did you know? Ravens have been observed sliding on their backs down snowy slopes for fun.",
    "Did you know? Ravens are omnivores and eat everything from fruit to small animals.",
    "Did you know? Ravens often hide food for later and can remember its location for weeks.",
    "Did you know? Ravens use body language, like fluffing their feathers, to communicate.",
    "Did you know? Ravens have more than 30 distinct vocalizations for different purposes.",
    "Did you know? Ravens sometimes follow predators like wolves to scavenge leftovers.",
    "Did you know? Ravens can distinguish between friendly and hostile humans.",
    "Did you know? Ravens have been known to console each other after a loss.",
    "Did you know? In many cultures, ravens are associated with mystery and magic.",
    "Did you know? Their black feathers have a blue or purple iridescence in sunlight.",
    "Did you know? Ravens are excellent fliers and can perform aerial acrobatics.",
    "Did you know? Ravens have been observed pretending to hide food to trick other animals.",
    "Did you know? Ravens can form social bonds with other species, including humans.",
    "Did you know? Young ravens often engage in 'play fights' to practice skills.",
    "Did you know? Ravens have been seen dropping nuts onto roads for cars to crack open.",
    "Did you know? Ravens can recognize themselves in mirrors, a sign of self-awareness.",
    "Did you know? Ravens often forage in pairs, showing teamwork.",
    "Did you know? Ravens are among the first birds to appear in spring, often while snow is still on the ground.",
    "Did you know? Ravens can 'speak' different regional dialects depending on their location.",
    "Did you know? Some ravens have been seen stealing shiny objects and hoarding them.",
    "Did you know? Ravens can sense when they are being watched and act differently.",
    "Did you know? In literature, ravens are often symbols of death or prophecy.",
    "Did you know? Ravens have a playful side and can bond with humans who feed them regularly.",
    "Did you know? Ravens have an excellent memory and can find food caches buried under snow.",
    "Did you know? Ravens are one of the few animals that show problem-solving skills in captivity.",
    "Did you know? Ravens are closely related to crows, magpies, and jays.",
    "Did you know? Ravens have been observed dropping stones to break ice or distract predators.",
    "Did you know? Ravens have been seen using sticks and other objects as toys.",
    "Did you know? Ravens are one of the only bird species known to engage in creative problem-solving consistently."
];

function displayRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length);
    const randomString = stringList[randomIndex];
    document.getElementById('randomString').textContent = randomString;
}

window.onload = function() {
    displayRandomString();
};
