package ch.glastroesch.jobyzrunner.business.user;

public enum Allowsearch {

    YES("Ja"), NO("Nein");
    private String text;

    private Allowsearch(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

}
