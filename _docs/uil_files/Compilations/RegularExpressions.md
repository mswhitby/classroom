# Section 3: Regular Expressions (REGEX)

**21 questions — using Pattern/Matcher, `matches()`, `replaceAll()`, `split()` with regex patterns**

---

## Q26 | 2020 (COVID - single packet)

Which of the following represents the output of the code segment shown on the right?

A) true true true  
B) true true false  
C) true false false  
D) false true true  
E) false false true  

```java
String s = "325-555-1234";
out.print(s.matches(".{10}") + " ");
out.print(s.matches("\\d+-\\d+-\\d+") + " ");
out.print(s.matches("325\\W555\\S1234"));
```

---

## Q32 | 2020 (COVID - single packet)

What is the output of the code segment shown on the right?

A) de#yk  
B) adcxdz  
C) ac9e#3py7xz6yk  
D) 3  
E) adc9de# py7xdz6yk  

```java
Scanner s = new Scanner("adc9de#3py7xdz6yk");
s.useDelimiter("\\d");
while(s.hasNext())
    if(s.next().matches("\\w{3}"))
        out.print(s.next());
```

---

## Q28 | 2025 Invitational A

What is the output?

A) true  
B) false  
C) Output cannot be determined until runtime  
D) There is no output due to a compile error  
E) There is no output due to a runtime error  

```java
String s1 = "H3llo Th3r3!";
String s2 = "H..{2,4}\\S..{2,5}";
s1 = "" + s1.matches(s2);
out.println(s1);
```

---

## Q28 | 2025 Invitational B

What is the output?

A) true true  
B) false true  
C) true false  
D) false false  
E) There is no output due to a runtime error  

```java
String s = "Luke Skywalker";
String fin = "";
String r = "(\\w)+|(\\s){0,3}";
fin += s.matches(r) + " ";
r = "([A-z]+ ?)*";
fin += s.matches(r);
out.println(fin);
```

---

## Q20 | 2025 State

What is output?

A) true true  
B) true false  
C) false true  
D) false false  
E) There is no output due to a runtime error  

```java
String m1 = "(\\w+ ){2,7}";
String m2 = "([A-Z]?[a-z]* ?)+";
String s = "One of a Kind";
out.print(s.matches(m1));
out.print(" ");
out.print(s.matches(m2));
```

---

## Q23 | 2024 Invitational B

What is the output?

A) 22  
B) 23  
C) 24  
D) 25  
E) 26  

```java
String Q = "ABCDEFGHIJKLM";
String R = "NOPQRSTUVWXYZ";
String T = R + Q;

for(int x = 0; x < T.length(); x++)
{
    String Z = T.substring(x, x + 1);
    if (Z.matches("[TEXAS]"))
        T = T.substring(0, x) + T.substring(x + 1);
}
out.print(T.length());
```

---

## Q24 | 2024 State

What is the output?

A) RSITY  
B) V  
C) V  
D) TY  
E) RIT  

```java
ArrayList<String> Starsky = new ArrayList<>();
String Hutch = "UNIVERSITY";

for(int x = 0; x < Hutch.length(); x++)
    Starsky.add(Hutch.substring(x));

for(int x = 0; x < Starsky.size(); x++)
{
    String A = Starsky.get(x);
    if(A.matches("[AEIOU].*"))
        Starsky.remove(x);
}

out.print(Starsky.get(2));
```

---

## Q37 | 2023 Region

What is the output?

A) 1  
B) 2  
C) 3  
D) 4  
E) 5  

```java
int C = 0;
String A = "R2-D2";

if(A.matches(".....")) C++;
if(A.matches(".2.2")) C++;
if(A.matches("[A-T]*")) C++;
if(A.matches("2.*")) C++;
if(A.matches(".*2")) C++;
if(A.matches(".*[0-9].*[0-9]")) C++;

out.print(C);
```

---

## Q23 | 2023 State

What is the output?

A) 4  
B) 6  
C) 8  
D) 10  
E) 12  

```java
String St = "BEAR OWL DOG CAT LION ";
St += "ZEBRA RAT PIG TIGER GORILLA";

int N = 0;
Scanner Sue = new Scanner(St);

while(Sue.hasNext())
{
    Sue.next();
    String A = Sue.next();

    if(A.matches("..O.")) N++;
    if(A.matches("[A-C].*")) N++;
    if(A.matches("..G")) N++;
    if(A.matches(".*R.*")) N++;
}

out.print(N);
```

---

## Q39 | 2022 Region

How many unique strings could replace `*CODE*` so the output is true?

```java
String A = "[ABC]{1,2}";
String B = "[BCD]{2,3}";
String C = /*CODE*/;

out.print(C.matches(A) && C.matches(B));
```

---

## Q40 | 2022 State

What is a String that could replace `*CODE*` so the output is true?

```java
String A = "A{1,5}B{1,5}C{1,5}";
String B = ".*ABC*";
String C = "....B...";
String S = /*CODE*/;

boolean x = S.matches(A);
boolean y = S.matches(B);
boolean z = S.matches(C);

out.println(x && y && z);
```

---

## Q36 | 2021 Invitational A

What is the output?

A) 12  
B) 5  
C) 6  
D) 10  
E) 7  

```java
String str = "UIL_Comp^Sci-2021";
int r = 0;

for(int i = 0; i < str.length(); i++)
    if(str.substring(i, i + 1).matches("[^a-z]"))
        r++;

out.print(r);
```

---

## Q18 | 2021 Region

What is the output?

A) [abc, zm, o]  
B) [abc, tzm, no]  
C) [abcxytzmxyno]  
D) [xyt, xyn]  
E) [abcxy, zmxy, o]  

```java
String r = "xy.";
String s = "abcxytzmxyno";

Pattern p = Pattern.compile(r);
String i[] = p.split(s);

out.println(Arrays.toString(i));
```

---

## Q16 | 2019 Invitational B

How many times does the code print true?

A) 0  
B) 15  
C) 3  
D) 4  
E) 18  

```java
String str = "abc^245#s&890jhy%165x";

for(int i = 0; i < str.length() - 3; i++) {
    String s = str.substring(i, i + 3);
    out.println(s.matches("[a-z]\\W\\d"));
}
```

---

## Q17 | 2019 District

What is the output?

A) true true true  
B) true false true  
C) true true false  
D) false true false  
E) false false false  

```java
String str = "325-978-1400";

out.print(str.matches(".{3}-\\w+-\\S+") + " ");
out.print(str.matches("325.978.1400") + " ");
out.print(str.matches(".*"));
```

---

## Q19 | 2019 State

Which line prints true?

A) line #1  
B) line #2  
C) line #3  
D) —  
E) None  

```java
final int flags = Pattern.CASE_INSENSITIVE | Pattern.LITERAL;
Pattern p = Pattern.compile("[abc]+", flags);

out.println(p.matcher("[aBc]+").matches()); // line #1
out.println(p.matcher("abc").matches());    // line #2
out.println(p.matcher("aBcAbC").matches()); // line #3
```

---

## Q16 | 2018 Invitational A

What is the output?

A) true false false false true  
B) false true true true false  
C) false false false false false  
D) true false false false false  
E) false true true true true  

```java
String s = "abcde";

for(int i = 0; i < s.length(); i++)
    out.print(s.substring(i, i+1).matches("[^aeiou]") + " ");
```

---

## Q22 | 2018 District

What is the output?

A) true true false  
B) true false true  
C) false true true  
D) false false true  
E) false true false  

```java
out.print("123ABC".matches("\\D{3}\\W{3}") + " ");
out.print("555-5555".matches(".+") + " ");
out.print("Alphabet".matches("A[a-z]?"));
```

---

## Q35 | 2018 Region

What does the method return?

```java
public static int method(String s) {
    s = s.toLowerCase();
    int x;

    for(x = 0; x < s.length(); x++)
        if(s.substring(x, x+1).matches("[aeiou]"))
            break;

    if(x != s.length())
        return x + 1;
    else
        return -1;
}
```

---

## Q20 | 2018 State

What is the output?

A) falsefalsetrue  
B) falsetruetrue  
C) truefalsetrue  
D) truetruetrue  
E) falsefalsefalse  

```java
String s = "uil.academics@uiltexas.org";

out.print(s.matches(".+"));
out.print(s.matches("\\S{3}.\\D+@[a-z]+.\\w{3}"));
out.print(s.matches("uil\\.?\\S*@+uiltexas.org"));
```

---

# Answer Key

- 2020 Q26: D  
- 2020 Q32: A  
- 2025 Invitational A Q28: A  
- 2025 Invitational B Q28: B  
- 2025 State Q20: C  
- 2024 Invitational B Q23: A  
- 2024 State Q24: A  
- 2023 Region Q37: C  
- 2023 State Q23: A  
- 2022 Region Q39: 4  
- 2022 State Q40: AAAABCCC  
- 2021 Invitational A Q36: 12  
- 2021 Region Q18: A  
- 2019 Invitational B Q16: 3  
- 2019 District Q17: A  
- 2019 State Q19: A  
- 2018 Invitational A Q16: B  
- 2018 District Q22: E  
- 2018 Region Q35: D  
- 2018 State Q20: D  

Get Outlook for iOS