package ch.glastroesch.jobyzrunner.business.user;

public enum Salary {

    SMALL("40-70"), MEDIUM("50-80"), MEDIUM_LARGE("60-90"), LARGE("70-100"), EXTRA_LARGE("100-150"), XXL("150-300");

    private String text;

    private Salary(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

}
