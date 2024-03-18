package ch.glastroesch.jobyzrunner.business.user;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import javax.xml.bind.DatatypeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void createUser(User user) throws NoSuchAlgorithmException {

        encryptPassword(user);
        userRepository.save(user);

    }

    private void encryptPassword(User user) throws NoSuchAlgorithmException {

        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(user.getPassword().getBytes());
        byte[] digest = md.digest();
        String encryptedPassword = DatatypeConverter.printHexBinary(digest).toUpperCase();

        user.setPassword(encryptedPassword);

    }
    
    public boolean login(User user) throws NoSuchAlgorithmException {
        
        User foundUser = userRepository.getUser(user.getUsername());
        
        encryptPassword(user);
        
        return foundUser.getPassword().equals(user.getPassword());
        
    }

}
