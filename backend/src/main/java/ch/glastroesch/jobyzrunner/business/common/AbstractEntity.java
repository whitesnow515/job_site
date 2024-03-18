package ch.glastroesch.jobyzrunner.business.common;

import com.google.gson.annotations.Expose;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @Expose
    protected Long id;

    @Override
    public int hashCode() {
        return id == null ? System.identityHashCode(this) : id.hashCode();
    }

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) {
            return true;
        }
        if (object == null || !(object.getClass().isAssignableFrom(getClass()) || getClass().isAssignableFrom(object.getClass()))) {
            return false;
        }
        AbstractEntity entity = (AbstractEntity)object;
        return id != null && id.equals(entity.getId());
    }

}
