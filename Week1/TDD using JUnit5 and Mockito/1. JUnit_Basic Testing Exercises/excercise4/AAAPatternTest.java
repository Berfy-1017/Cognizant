package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAAPatternTest {

    private calculator calc;

    @Before
    public void setUp() {
        System.out.println("Setup Method Executed");
        calc = new calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Method Executed");
        calc = null;
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(30, result);
    }
}