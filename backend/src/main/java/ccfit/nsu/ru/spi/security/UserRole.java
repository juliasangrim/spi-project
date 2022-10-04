package ccfit.nsu.ru.spi.security;

public enum UserRole {
    CLIENT,
    ADMIN;

    public static class UserAuthority {
        public static final String ROLE_CLIENT = "ROLE_CLIENT";
        public static final String ROLE_ADMIN = "ROLE_ADMIN";

        private UserAuthority() {
        }
    }

}
