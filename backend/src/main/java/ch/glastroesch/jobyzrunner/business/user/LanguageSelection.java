package ch.glastroesch.jobyzrunner.business.user;

public class LanguageSelection {
    
    private String key;
    private String value;
    
    public LanguageSelection(String key, String value) {
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
