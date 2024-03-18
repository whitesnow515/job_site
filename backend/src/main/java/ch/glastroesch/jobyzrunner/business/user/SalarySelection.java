package ch.glastroesch.jobyzrunner.business.user;

public class SalarySelection {
    
    private String key;
    private String value;
    
    public SalarySelection(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }
    
}
