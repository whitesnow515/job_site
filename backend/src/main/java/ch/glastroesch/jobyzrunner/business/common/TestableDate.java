package ch.glastroesch.jobyzrunner.business.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import static java.util.Calendar.DATE;
import static java.util.Calendar.HOUR_OF_DAY;
import static java.util.Calendar.MILLISECOND;
import static java.util.Calendar.MINUTE;
import static java.util.Calendar.MONTH;
import static java.util.Calendar.SECOND;
import static java.util.Calendar.YEAR;
import java.util.Date;

public class TestableDate {

    private static Date currentDate;

    public static Date currentDate() {

        if (currentDate != null) {
            return currentDate;
        }
        return new Date();

    }

    public static void setCurrentDate(Date currentDate) {
        TestableDate.currentDate = currentDate;
    }

    public static Date getDayStart(Date date) {

        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        cal.set(HOUR_OF_DAY, 0);
        cal.set(MINUTE, 0);
        cal.set(SECOND, 0);
        cal.set(MILLISECOND, 0);

        return cal.getTime();

    }

    public static Date createDate(int year, int month, int day) {

        Calendar cal = Calendar.getInstance();
        cal.set(YEAR, year);
        cal.set(MONTH, month);
        cal.set(DATE, day);

        return getDayStart(cal.getTime());

    }

    public static Date createDate(int year, int month, int day, int hour, int minute, int second) {

        Date date = createDate(year, month, day);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.set(HOUR_OF_DAY, hour);
        cal.set(MINUTE, minute);
        cal.set(SECOND, second);

        return cal.getTime();

    }

    public static Date inPast(int days) {

        Calendar cal = Calendar.getInstance();
        cal.setTime(currentDate());
        cal.add(DATE, -1 * days);

        return cal.getTime();

    }

    public static Date extractTime(Date input) throws ParseException {

        SimpleDateFormat format = new SimpleDateFormat("HHmmss");
        String formattedDate = format.format(input);

        return format.parse(formattedDate);

    }

}
