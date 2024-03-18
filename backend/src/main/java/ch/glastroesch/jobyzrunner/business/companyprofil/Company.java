package ch.glastroesch.jobyzrunner.business.companyprofil;

import ch.glastroesch.jobyzrunner.business.common.AbstractEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "Company")
public class Company extends AbstractEntity {

    @Column(name = "Username")
    private String username;

    @Column(name = "Passwort")
    private String password;

    @Column(name = "Companyname")
    private String companyName;

    @Column(name = "industry")
    private String industry;

    @Column(name = "companySize")
    private String companySize;

    @Column(name = "companysince")
    private String companySince;

    @Column(name = "companyDescription")
    private String companyDescription;

    public Company() {
        // for jpa
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getCompanySize() {
        return companySize;
    }

    public void setCompanySize(String companySize) {
        this.companySize = companySize;
    }

    public String getCompanySince() {
        return companySince;
    }

    public void setCompanySince(String companySince) {
        this.companySince = companySince;
    }

    public String getCompanyDescription() {
        return companyDescription;
    }

    public void setCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
    }
}





    



