package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {
        calculator calculator = new calculator();
        assertEquals(8, calculator.add(5, 3));
    }
}