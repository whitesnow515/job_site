package ch.glastroesch.jobyzrunner.business.user;

public enum Language {

    english("Englisch"), german("Deutsch"), french("Französisch"), italian("Italienisch"), spanish("Spanisch"), portuguese("Portugiesisch"), russian("Russisch"), chinese("Chinesisch"), japanese("Japanisch"), arabic("Arabisch"), other("Andere");
    private String text;

    private Language(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

}
