# Implementation Guide: Perfect Vertical Alignment for Card Content in Related Articles

## Goal
Ensure all content elements (title, description, button) in each article card are vertically aligned, so the "Read More" buttons always line up at the bottom regardless of content length.

---

## 1. **Update Card Structure for Flexbox Layout**

**Why:**  
Flexbox allows vertical distribution of card content and enables pushing the button to the bottom using `margin-top: auto`[3][4][5][9].

**How:**
- Set the card container (`Card`) to `display: flex; flex-direction: column; height: 100%`.
- Ensure the card's parent grid (`grid-cols-3`) allows all cards to stretch to equal height.

**Example:**

```
<Card
key={post.id}
className="flex flex-col h-full bg-white border-brand-teal/10 hover:shadow-lg transition-shadow"

{/* ... /}
<CardHeader className="p-0">
{/ ... */}
</CardHeader>
<CardContent className="flex flex-col flex-1 p-4">
<CardTitle className="text-lg leading-tight text-brand-charcoal font-serif mb-2">
{post.title}
</CardTitle>
<CardDescription className="text-sm text-brand-charcoal/70 mb-4">
{post.excerpt.length > 100 ? ${post.excerpt.substring(0, 100)}... : post.excerpt}
</CardDescription>
<div className="mt-auto">
<Button variant="outline" asChild className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
<Link href={/blog/${post.slug}}>Read More</Link>
</Button>
</div>
</CardContent>
</Card>
```
**Key points:**
- Add `flex flex-col h-full` to the `Card`.
- Add `flex flex-col flex-1` to `CardContent`.
- Wrap the button in a `` to push it to the bottom.

---

## 2. **Ensure Consistent Card Height**

**Why:**  
All cards must have equal height for bottom alignment to work[5][9].

**How:**
- The grid container should not restrict card height.  
- Each card should fill the available height (`h-full` on `Card` and `flex-1` on `CardContent`).

---

## 3. **Fine-tune Spacing and Responsiveness**

**Why:**  
To maintain visual balance and responsiveness across screen sizes[5][8].

**How:**
- Use consistent vertical spacing (e.g., `mb-2`, `mb-4`).
- Use responsive grid classes (`grid-cols-1 md:grid-cols-3 gap-6`).

---

## 4. **Test with Variable Content Lengths**

**Why:**  
To confirm alignment holds regardless of title/description length[3][4].

**How:**
- Populate cards with titles and descriptions of varying lengths.
- Verify "Read More" buttons always align at the bottom.

---

## 5. **Optional: Add Min Height for Extra Consistency**

**Why:**  
If cards still look uneven, set a `min-h-[value]` on the card or content area.

---

## 6. **Summary of Key CSS Classes**

| Element          | Classes to Add/Update                       |
|------------------|---------------------------------------------|
| Card             | `flex flex-col h-full`                      |
| CardContent      | `flex flex-col flex-1`                      |
| Button Wrapper   | `mt-auto`                                   |

---

## 7. **References**

- [YouTube: Card Alignment with Flexbox and Auto Margin][3][4]
- [CSS Flexbox Card UI Guide][5][9]

---

## 8. **Final Checklist**

- [ ] Card uses flex column and fills height
- [ ] CardContent uses flex column and grows
- [ ] Button is wrapped in `mt-auto` container
- [ ] Grid allows cards to stretch to equal height
- [ ] Visual test with variable content

---

**Result:**  
All card content is vertically aligned, and "Read More" buttons are perfectly lined up, regardless of content length.

```