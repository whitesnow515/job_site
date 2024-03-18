package ch.glastroesch.jobyzrunner.business.file;

import ch.glastroesch.jobyzrunner.business.common.AbstractEntity;
import static ch.glastroesch.jobyzrunner.business.common.TestableDate.currentDate;
import ch.glastroesch.jobyzrunner.business.user.User;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "File")
public class File extends AbstractEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "content")
    private byte[] content;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User user;

    public File(String name, byte[] content) {
        this.name = name;
        this.content = content;
        createdOn = currentDate();
    }

    public File() {
        // for jpa
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
