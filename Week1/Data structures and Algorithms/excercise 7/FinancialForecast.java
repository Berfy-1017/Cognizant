class FinancialForecast {

    static double forecast(double value, double growthRate, int years) {

        if (years == 0) {
            return value;
        }

        return forecast(value * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double initialValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double result = forecast(initialValue, growthRate, years);

        System.out.println("Forecasted Value after " + years + " years: " + result);
    }
}