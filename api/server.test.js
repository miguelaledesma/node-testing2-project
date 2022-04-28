test('make sure our environment is set correctly', () => {
    expect(process.env.NODE_ENV).toBe('testing');
});