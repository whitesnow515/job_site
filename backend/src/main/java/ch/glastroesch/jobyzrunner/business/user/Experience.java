package ch.glastroesch.jobyzrunner.business.user;

public enum Experience {

    SMALL("0-3 Jahre"), Medium("3-5 Jahre"), BIG("5-10 Jahre"), Expert("10+ Jahre");
    private String text;

    private Experience(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

}
