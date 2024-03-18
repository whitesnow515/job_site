package ch.glastroesch.jobyzrunner.business.user;

public enum Education {

    NONE("Keine"),SECONDARY("Sekundarschule"), HIGH("Gymnasium"), UNIVERSITY("Universität") , OTHER("Andere"), APPRENTICESHIP("Lehre"), MASTER("Master"), BACHELOR("Bachelor") , DOCTOR("Doktor"), PROFESSOR("Professor");
    private String text;

    private Education(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

}
