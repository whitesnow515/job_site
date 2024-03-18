package ch.glastroesch.jobyzrunner.business.user;

public class AllowsearchSelection {
    
    private String key;
    private String value;
    
    public AllowsearchSelection(String key, String value) {
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
