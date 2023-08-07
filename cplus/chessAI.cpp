#include<bits/stdc++.h>
using namespace std;


class position {
    public:
        char letter;
        int number;

        string stringForm() {
            return letter + to_string(number);
        }

};

const int pieceDigits = 3;
const int colorDigits = 1;

map<string,int>game = {};
map<string,int>& gameReference = game;

bool inbounds(position p) {
    return (p.letter <= 'h' && p.letter >= 'a' && p.number <=8 && p.number>=1);
}

string pieceString (position p) {
    int piece = game[p.stringForm()];
    int pieceType = piece % int((pow(10,pieceDigits)));
    if (pieceType == '1') {
        return "pawn";
    }
    return "error";

}

vector<int>& pawnMoves (position p) {

}
vector<int>& getMoves (position p) {
    if (pieceString(p) == ("pawn")) {
        return pawnMoves(p);
    }
}



int main () {
    string text;
    cin >> text;
    cout << text;
    return 0;
}