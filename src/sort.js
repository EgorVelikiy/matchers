export default function sortChars(chars) {
    return chars.sort((char1, char2) => char1.health < char2.health ? 1 : -1);
}