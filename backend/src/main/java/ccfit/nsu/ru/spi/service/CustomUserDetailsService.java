package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        //TODO to implement
        return null;
    }

}