---
uniqueName: html-css
title: HTML - CSS.
isActive: true
sections:
  - sectionTitle: Basic-HTML
    isActive: true
    pages:
      - pageTitle: Introduction to HTML
        isActive: true
        body: |-
          
          # Introduction to HTML

          ```html
          <!DOCTYPE html>
          <html>
          	<head>
          		<!--Information about the page-->

          		<title>AgileActors Training</title>
          	</head>

          	<body>
          		<!--Contents of the webpage-->
          	</body>
          </html>
          ```
      - pageTitle: Introduction to HTML2
        isActive: true
        body: >-
          # Introduction to HTML


          - All HTML documents must begin with a document type declaration: `<!DOCTYPE html>.`


          - The HTML document itself begins with `<html>` and ends with `</html>`.


          - The `<head>` element is a container for metadata.


          - The visible part of the HTML document is between `<body>` and `</body>`.
      - pageTitle: Analyzing HTML structure/DOCTYPE
        isActive: true
        body: >-
          # Analyzing HTML structure


          ```html{1-1}

          <!DOCTYPE html>

          <html>

              <head>
                  <!--Information about the page-->

                  <title>AgileActors Training</title>
              </head>

              <body>
                  <!--Contents of the webpage-->
              </body>

          </html>


          ```


          ## **DOCTYPE** is a declaration that tells the browser what version of HTML we are using. DOCTYPE is not an HTML element or tag
      - pageTitle: Analyzing HTML structure/head element
        isActive: true
        body: >-
          # Analyzing HTML structure


          ```html{4-8}

          <!DOCTYPE html>

          <html>

            <head>
              <!--Information about the page-->

                <title>AgileActors Training</title>
            </head>

            <body>
              <!--Contents of the webpage-->
            </body>

          </html>


          ```


          ## The `<head>` element is a container for metadata. Metadata is data about the HTML document (page title, links to other pages, scripts, character encoding). Metadata is not displayed.
      - pageTitle: Analyzing HTML structure/body element
        isActive: true
        body: >-
          # Analyzing HTML structure


          ```html{10-12}

          <!DOCTYPE html>

          <html>

            <head>
              <!--Information about the page-->

                <title>AgileActors Training</title>
            </head>

            <body>
              <!--Contents of the webpage-->
            </body>

          </html>


          ```


          ## The `<body>` tag contains web page content (text, images, links, etc.).
      - pageTitle: Analyzing HTML structure/title tag
        isActive: true
        body: |-
          ```html
          <!DOCTYPE html>

          <html>

              <head>
                  <meta charset="utf-8">
                  <title>My page awesome title</title>
              </head>

              <body >
                  <div style="border: 5px solid red;">
                  <h1>This is a demo title</h1>
                  <h2>This is a demo subtitle</h1>
                  <p>This is a demo paragraph</p>
              </body>


          </html>
          ```

          ### The `<title>` tag defines the title of the document.

          ### With the `style` attribute you can add styling to your elements.
      - pageTitle: Demo
        isActive: true
        body: |-
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>My page awesome title</title>
            </head>
            <body >
            <div style="border: 5px solid red;">
            <h1>This is a demo title</h1>
            <h2>This is a demo subtitle</h2>
              <p>This is a demo paragraph</p>
            </body>
          </html>
  - sectionTitle: Terminology
    isActive: true
    pages:
      - pageTitle: Tags & Attributes
        isActive: true
        body: |-
          # HTML Terminology

          - **Tags**
          - **Nested Tags**
          - **Attributes**
      - pageTitle: Tags 1
        isActive: true
        body: >-
          # Tags


          HTML tags are like keywords which define that how web browser will format and display the content.


          <h2>


          ```

          <tag> Content </tag>

          ```


          </h2>
      - pageTitle: Tags 2
        isActive: true
        body: >-
          # Tags


          HTML tags are like keywords which define that how web browser will format and display the content.


          <h2>


          ```

          <tag> Content </tag>

          ```


          </h2>


          <br>


          **Opening tag**


          Tells the browser to turn on the feature and apply it to the document content that follows.


          **Closing tag**


          Tells the browser to turn off a specific feature of an opening tag.


          <h2>


          ```

          <openingTag> Content </closingTag>

          ```


          </h2>
      - pageTitle: Tags 3
        isActive: true
        body: >-
          # Tags


          HTML tags are like keywords which define that how web browser will format and display the content.


          <h2>


          ```

          <tag> Content </tag>

          ```


          </h2>


          <br>


          **Self-closing tag**


          You can also find some self-closing tags like br (line break), img (image) etc</h2>


          <h2>


          ```

          <br> Example 1


          <br/> Example 2

          ```


          </h2>
      - pageTitle: Nested Tags 1
        isActive: true
        body: |-
          # Nested Tags

          Nesting occurs when you place tags within other tags.

          ```
          <tag attribute='value'>
              <nestedTag> Content </nestedTag>
          </tag>
          ```

          Content can be a simple string or MORE NESTED TAGS! <br>
      - pageTitle: Nested Tags 2
        isActive: true
        body: |-
          # Nested Tags

          Nesting occurs when you place tags within other tags.

          ```javascript
          <tag attribute="value">
            <nestedTag>
              <anotherNestedTag> Content </anotherNestedTag>
            </nestedTag>
          </tag>
          ```

          <blockquote>


          </blockquote>
      - pageTitle: Attributes 1
        isActive: true
        body: >-
          # Attributes


          Properties of an HTML element used to provide additional instructions to a given HTML tag.


          The attribute is specified at the start of HTML tag.


          <h2>


          ```

          <tag attribute='value'> Content </tag>

          ```


          </h2>
      - pageTitle: Attributes 2
        isActive: true
        body: >-
          # Attributes


          Some common examples


          | Attribute | Description                                                            |

          | --------- | ---------------------------------------------------------------------- |

          | alt       | Specifies an alternate text when the original element fails to display |

          | class     | Specifies one or more classnames for an element                        |

          | colspan   | Specifies the number of columns a table cell should span               |

          | rowspan   | Specifies the number of rows a table cell should span                  |

          | height    | Specifies the height of the element                                    |

          | width     | Specifies the width of the element                                     |

          | href      | Specifies the URL of the page the link goes to                         |

          | label     | Specifies the title of the text track                                  |

          | src       | Specifies the URL of the media file                                    |

          | style     | Specifies an inline CSS style for an element                           |

          | value     | Specifies the value of the element                                     |
      - pageTitle: Attributes 3
        isActive: true
        body: >-
          # Attributes


          and of course...some of the very IMPORTANT script type attributes


          | Attribute   | Description                                                 |

          | ----------- | ----------------------------------------------------------- |

          | onchange    | Script to be run when the value of the element is changed   |

          | onclick     | Script to be run when the element is being clicked          |

          | oninput     | Script to be run when the element gets user input           |

          | onmouseover | Script to be run when a mouse pointer moves over an element |


          and many more!!!

          <br>

          <br>


          We are going to talk about them later!
  - sectionTitle: Icons
    isActive: true
    pages:
      - pageTitle: Adding Icons
        isActive: true
        body: >-
          # Adding Icons


          - To insert an icon, add the name of the icon class to any inline HTML element.

          - The **i** and **span** elements are widely used to add icons.

          - There is a variety of icon libraries to use, no downloading or installation is required!

          - All the icons in these libraries are scalable vector icons that can be customized with CSS.


          The most popular icon libraries are:


          - Google Icons

          - Bootstrap 3 Icons

          - Font Awesome 5 Icons
      - pageTitle: Icons Example
        isActive: true
        body: >-
          # Icons in Action


          ```html

          <!DOCTYPE html>

          <html>
            <head>
              <title>Font Awesome Icons</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <script
                src="https://kit.fontawesome.com/a076d05399.js"
                crossorigin="anonymous"
              ></script>
            </head>
            <body>
              <i class="fas fa-band-aid"></i>
              <i class="fas fa-cat"></i>
              <i class="fas fa-dragon"></i>
            </body>
          </html>

          ```


          <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/bandage.svg" width="50" height="50">

          <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/cat.svg" width="50" height="50">

          <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/dragon.svg" width="50" height="50">
  - sectionTitle: Block And Inline Elements
    isActive: true
    pages:
      - pageTitle: Introducing Block and Inline Elements
        isActive: true
        body: |-
          # Introducing Block and Inline Elements

          Web browsers treat every HTML element as a box.

          Every HTML element has a default display value, depending on its type.

          There are two main display values:

          - **Block**
          - **Inline**

          Let's dive deeper into these values!
      - pageTitle: Block Elements
        isActive: true
        body: |-
          # Block Elements

          - Always start on a new line.
          - Fill up the space left and right on the web page.
          - Always take up the full width available.
          - You can add margins and padding on all four sides.

          **The most common block elements are:**

          - **`<p>`** defines a paragraph.
          - **`<div>`** defines a section.
      - pageTitle: Block Elements 2
        isActive: true
        body: |-
          <style>
          .element {
            padding:16px;
            margin-top:64px;
            margin-bottom:16px;
            background-color:#0583D2;
            color:white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius:8px;
          }
          p {
          padding:16px;
            background-color:#0583D2;
            color:white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius:8px;
          }
          </style>

          # Block Elements

          ```
            <p class="element">This is a p element!</p>
          ```
      - pageTitle: Inline Elements
        isActive: true
        body: >-
          # Inline Elements


          - **Don’t** start on a new line.

          - Appear on the same line as the content beside them.

          - You can add space to the left and right.

          - You **cannot** add height to the top or bottom margin.

          - You **can** add height to the top or bottom padding, **but it won't affect the nearby elements' position.**

          - Only take up as much width as necessary.


          **The most common inline elements are:**


          - **`<span>`** a container for content.

          - **`<a>`** a webpage link.

          - **`<img>`** a container for images.
      - pageTitle: Inline Elements 2
        isActive: true
        body: |-
          <style>
          .container {
            margin-top:64px;
          }
          .element {
            padding:16px;
            margin-right:16px;
            background-color:#0583D2;
            color:white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius:8px;
          }
          </style>

          # Inline Elements

          ```
              <span class="element">This is a span element!</span>
              <span class="element">This is another span element!</span>
          ```

              <span class="element">This is a span element!</span>
              <span class="element">This is another span element!</span>
  - sectionTitle: Layout-Elements
    isActive: true
    pages:
      - pageTitle: Layout Elements
        isActive: true
        body: |-
          
          # Layout Elements

          #### Header, Section, Footer

          ```html
          <!DOCTYPE html>
          <html>
          	<header>
          		<!--Information about the page-->
          		<title>AgileActors Training</title>
          	</header>

          	<body>
          		<header>
          			<!--Page Header-->
          		</header>

          		<section>
          			<!--Page Content-->

          			<nav>
          				<!--Navigation links-->
          			</nav>

          			<article>
          				<!--Specifies independent, self-contained content.-->
          			</article>
          		</section>

          		<footer>
          			<!--Page Footer-->
          		</footer>
          	</body>
          </html>
          ```
      - pageTitle: Layout Elements 1
        isActive: true
        body: >-
          
          # Header


          - The `<header>` HTML element usually contains information about the page author, navigation links, a search form or any relevant logos.

          - There can be several `<header>` elements in one document.

          - It cannot be used within an `<address>`, `<footer>` or another `<header>` element.
      - pageTitle: Layout Elements 2
        isActive: true
        body: |-
          
          # Section

          - The `<section>` HTML element represents a section of the document.
          - It groups related content together.
          - It usually contains a `<header>`.

          ```html
          <section>
          	<header>
          		<h2>Section Header</h2>
          		<nav>Navigation Links</nav>
          	</header>
          	<article>Section awesome content</article>
          </section>
          ```
      - pageTitle: Layout Elements 3
        isActive: true
        body: >-
          
          # Footer


          - The `<footer>` tag defines a footer for a document or section.

          - There can be more than one `<footer>` element in the document.

          - It usually contains copywrite and contact information or links to related documents..


          ```html

          <section>
          	<header>
          		<h2>Section Header</h2>
          	</header>
          	<p>Section awesome content</p>
          	<footer>Section awesome footer</footer>
          </section>

          ```
      - pageTitle: Layout Elements 4
        isActive: true
        body: >-
          
          # Nav


          - The `<nav>` element represents a section of a page whose purpose is to provide navigation links.

          - There can be more than one `<nav>` element in the document.


          ```html{2-7}

          <section>
          	<nav>
          	    <ul>
          		    <li><a href="https://learningactors.com/">Agile Actors #learning</a></li>
          		    <li><a href="https://reactjs.org/">React</a></li>
          	    </ul>
          	</nav>
          	<p>Section awesome content</p>
          </section>

          ```
      - pageTitle: Layout Elements 5
        isActive: true
        body: >-
          
          # Article


          - The `<article>` tag is usually used for a forum post, blog post, news story etc.

          - There can be more than one `<article>` tag in the document.

          - The `<article>` tag does not render as anything special in a browser.


          ```html

          <section>
          	<header>Web development</header>
          	<nav>
          		<ul>
          			<li><a href="https://learningactors.com/">Agile Actors #learning</a></li>
          		</ul>
          	</nav>
          	<article>
          		<header>HTML</header>
          		<p>
          			Hypertext Markup Language, a standardized system for tagging text files to
          			achieve font, colour, graphic, ...
          		</p>
          	</article>
          	<article>
          		<header>CSS</header>
          		<p>
          			Cascading Style Sheets (CSS) is a style sheet language used for describing
          			the presentation of a document written in a ...
          		</p>
          	</article>
          </section>

          ```
      - pageTitle: Layout Elements 6
        isActive: true
        body: |-
          
          # Example

          [Link text](codesandbox-embed://layout-example)
  - sectionTitle: Formatting
    isActive: true
    pages:
      - pageTitle: Formatting Elements 2
        isActive: true
        body: >-
          # Formatting Elements


          <br>


          In HTML the formatting tags are divided into **two** categories:


          - **Physical tag**: These tags are used to provide the visual appearance to the text.

          - **Logical tag**: These tags are used to add some logical or **semantic** value to the text.
      - pageTitle: Formatting Tags
        isActive: true
        body: >-
          # Formatting Tags


          List of the most common HTML formatting tags.


          | Attribute     | Description                                                               |

          | ------------- | ------------------------------------------------------------------------- |

          | <**h1**>      | Logical tag, which tells the browser that the text is a heading.          |

          | <**p**>       | Logical tag, which tells the browser that the text is a paragraph.        |

          | <**b**>       | Physical tag, which is used to bold the text written between it.          |

          | <**strong**>	| Logical tag, which tells the browser that the text is important.          |

          | <**i**>	    | Physical tag, which is used to make text italic.                          |

          | <**em**>	    | Logical tag, which is used to display content in italic.                  |

          | <**u**>	    | Physical tag, which is used to underline text written between it.         |

          | <**del**>	    | Physical tag, which is used to display the deleted content (Strikethrough)|

          | <**mark**>    | Physical tag, which is used to highlight text.                            |
      - pageTitle: Formatting Headings
        isActive: true
        body: >-
          # Headings


          <br>


          HTML headings are titles or subtitles that you want to display on a webpage.


          - HTML headings are defined with the <**h1**> to <**h6**> tags.

          - <**h1**> defines the most important heading (which also means, the largest one).

          - <**h6**> defines the least important heading.

          - <**h1**> represents the main heading, <**h2**> represents subheadings, <**h3**> represents sub-subheadings, and so on.
      - pageTitle: Formatting Headings 2
        isActive: true
        body: |-
          # Headings

          **Headings In Action**

          ```
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          ...
          ```

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          ...
      - pageTitle: Formatting Headings 3
        isActive: true
        body: >-
          # Headings


          <br>


          Some useful tips:


          - The main keyword of the whole content of a webpage should be display by <**h1**> heading tag.

          - Avoid using **more than one <**h1**>** heading per page.

          - There is small value in using headings smaller than <**h3**>. Avoid, if not necessary.

          - Headings in HTML helps the search engine to understand and index the structure of web page. It is **NOT** just a styling tool.

          - ...and this is why they should be used for headings **only**. They should **NOT** be used just to make text **bold** or **big**.
      - pageTitle: Formatting Paragraphs
        isActive: true
        body: >-
          # Paragraphs


          <br>


          HTML paragraph is the element that defines a paragraph


          - HTML paragraphs are defined with the <**p**> tag.

          - They usually contain a block of text.

          - A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
      - pageTitle: Formatting Elements 1
        isActive: true
        body: >-
          # Formatting Elements


          <br>


          **HTML Formatting** is a process of formatting text


          - HTML contains several elements for defining text with a special meaning or giving them better look and feel


          - These tags are used to make text <b>bold</b>, <i>italicized</i>, <u>underlined</u> etc
      - pageTitle: Formatting Paragraphs 2
        isActive: true
        body: >-
          # Paragraphs


          <br>


          **Paragraphs In Action**


          ```

          <h2>1. OF FIDDLE MORD</h2>


          <hr>


          <p>There was a man named Mord whose surname was Fiddle; <br> he was the

          son of Sigvat the Red, and he dwelt at the "Vale" in the

          Rangrivervales...</p>


          <p>Now the story turns westward to the Broadfirth dales, where, at

          Hauskuldstede, in Laxriverdal</p>

          ```


          <br>


          <h2>1. OF FIDDLE MORD</h2>


          <hr>


          <p>There was a man named Mord whose surname was Fiddle; <br> he was the

          son of Sigvat the Red, and he dwelt at the "Vale" in the

          Rangrivervales...</p>


          <p>Now the story turns westward to the Broadfirth dales, where, at

          Hauskuldstede, in Laxriverdal</p>
      - pageTitle: Formatting Tags Bold
        isActive: true
        body: >-
          # Bold & Strong Tag


          The HTML <**b**> element is a **physical** tag which display text in bold font, **without** any logical importance.


          If you write anything within <**b**>............<**/b**> element, is shown in bold letters.


          <br>


          **`<bold>` Tag In Action**


          <br>


          ```

          <b>Bold Text</b>

          ```


          <br>


          Result:


          <b>Bold Text</b>
      - pageTitle: Formatting Tags Strong
        isActive: true
        body: >-
          # Bold & Strong Tag


          The HTML <**strong**> tag is a **logical** tag, which displays the content in bold font and informs the browser about its **logical importance**.


          If you write anything between <**strong**>........<**/strong**>, is shown as important text.


          <br>


          **`<strong>` Tag In Action**


          <br>


          ```

          <strong>Strong Text</strong>

          ```


          <br>


          Result:


          <strong>Strong Text</strong>


          <blockquote class='hint'>

          If you want to emphasis a word, it is better to use strong tag. It is being recognised as important by Search Engines, by programs for blind people etc.</a>

          </blockquote>
      - pageTitle: Formatting Tags Italic & em
        isActive: true
        body: >-
          # Italic & em Tags


          The HTML <**i**> element is **physical** element, which display the enclosed content in italic font, without any added importance.

          and <**em**> is the **logical** counterpart of it. It gives **less emphasis than strong**, but still indicates "added stress" or "voice tone change".


          <br>


          **`<i>` And `<em>` Tags In Action**


          <br>


          ```

          <i>Italic Text</i>

          <br>

          <em>This</em> is how we give <strong>emphasis</strong>

          ```


          <br>


          Result:


          *Italic Text*

          <br>


          *This* is how we give <strong>emphasis</strong>


          <blockquote class='hint'>

          For emphasis on a word in the sentence, prefer using em tag, while for extra importance, seriousness, or urgency use strong <br>

          The bold and i tags are only for styling, which we'll see later that we have other better tools for it like CSS.

          </blockquote>
      - pageTitle: Formatting Tags Others
        isActive: true
        body: >-
          # Other useful Tags


          - <**mark**> Marked: **Physical** tag that shows highlighted text

          - <**u**> Underlined: **Physical** tag that shows underlined text

          - <**ins**> Inserted: **Logical** tag that shows underlined text, but means that the text has been inserted later in the document

          - <**del**> Deleted: **Logical** tag that shows srikethrough text and means that the text has been deleted (the opposite of inserted)
      - pageTitle: Formatting Tags Others 2
        isActive: true
        body: |-
          # Other useful Tags
          Exercise

          <br>

          ```
          Burger Menu
          CheeseBurger..............3.00 2.00$
          ```

          <br>

          Result:

          <mark>Burger</mark> Menu
          <br>
          <u>CheeseBurger</u>..............<del>3.00</del> <ins>2.00</ins>$

          <br>

          How can we achieve this result?
      - pageTitle: Formatting Tags Others 3
        isActive: true
        body: >-
          # Other useful Tags


          Exercise

          <br>


          ```

          <mark>Burger</mark> Menu

          <br>

          <u>CheeseBurger</u>..............<del>3.00</del> <ins>2.00</ins>$

          ```


          <br>


          Result:


          <mark>Burger</mark> Menu

          <br>

          <u>CheeseBurger</u>..............<del>3.00</del> <ins>2.00</ins>$


          <blockquote class='hint'>

          Although seemingly useful, it is outdated to use html tags for styling. It is not customisable. <br> This is where CSS comes in, filling this need for custom styling. We'll talk about CSS later</blockquote>
      - pageTitle: Formatting Why Use Structure
        isActive: true
        body: >-
          # Why do we need structure?


          <br>


          -  Browser doesn't understand line breaks. You need the respective elements to give a structure to your page with headings and paragraphs.

          - Users looking at a web page tend to scan quickly to find relevant content, often just reading the headings, to begin with. You need to keep their attention.

          - To style content with CSS, or make it do interesting things with JavaScript, you need to have elements wrapping the relevant content, so CSS/JavaScript can effectively target it.
      - pageTitle: Formatting Why Use Semantics
        isActive: true
        body: >-
          # Why do we need semantics?


          <br>


          - By default, the browser will give styling to certain semantics ( h1 will be presented as heading, strong will be presented as bold etc ).

          - More importantly, it helps browser and developers to understand the content

          - The semantic value is also used in multiple ways. For example it is used by search engines and screen readers.
  - sectionTitle: Button Tag
    isActive: true
    pages:
      - pageTitle: Button Tag
        isActive: true
        body: >-
          # The Button Tag


          - Defines a clickable button.

          - Inside you can put text and tags like <**i**>, <**b**>, <**strong**>, <**br**>, <**img**>, etc.

          - Its type can vary, depending on its usage.

          - Can be styled with CSS.
      - pageTitle: The Button Tag In Action
        isActive: true
        body: >-
          # The Button Tag In Action



          ```

          <button type="button" style="font-size:4em">

          Default Button

          </button>

          <button type="button" style="font-size:4em; padding:16px; background-color:#0583D2; border-radius:16px; border:none; color:white">

          Styled Button

          </button>

          ```


          <button type="button" style="font-size:4em">

          Default Button

          </button>

          <button type="button" style="font-size:4em; padding:16px; background-color:#0583D2; border-radius:16px; border:none; color:white">

          Styled Button

          </button>
      - pageTitle: Button Tag Attributes
        isActive: true
        body: >-
          # Button Tag Attributes


          | Attribute | Value    | Description                                |

          | --------- | -------- | ------------------------------------------ |

          | disabled  | disabled | Specifies that a button should be disabled |

          | name      | name     | Specifies a name for the button            |

          | type      | button   | Specifies the type of button               |

          |           | reset    |                                            |

          |           | submit   |                                            |

          | value     | text     | Specifies an initial value for the button  |


          <blockquote class='hint'>

          For more information on attributes click <a href='https://www.w3schools.com/tags/tag_button.asp'>here</a>

          </blockquote>
  - sectionTitle: Img Tag
    isActive: true
    pages:
      - pageTitle: Img Tag
        isActive: true
        body: >-
          # The Img Tag


          - Is used to embed an image in an HTML page.

          - Creates a holding space for the referenced image, as images are not technically inserted into a web page.


          The **img** tag has two required attributes:


          - **src**: Specifies the path to the image.

          - **alt**: Specifies an alternate text for the image, if the image cannot be displayed.


          <blockquote class="danger">
            Always specify the width and height of an image, otherwise the page might flicker while the image loads.
          </blockquote>


          <blockquote class="hint">
            To link an image to another document, simply nest the img tag inside an a tag.
          </blockquote>
      - pageTitle: The Img Tag In Action
        isActive: true
        body: >-
          # The Img Tag In Action



          ```

          <img src="https://miro.medium.com/max/3150/1*o2gqK5A6W3k5ztjF679Q7A.png" alt="Agile Actors Logo" width="500" height="500">

          ```


          <img src="https://miro.medium.com/max/3150/1*o2gqK5A6W3k5ztjF679Q7A.png" alt="Agile Actors Logo" width="500" height="500">
      - pageTitle: Img Tag Attributes
        isActive: true
        body: >-
          # Img Tag Attributes


          | Attribute | Value  | Description                              |

          | --------- | ------ | ---------------------------------------- |

          | alt       | text   | Specifies an alternate text for an image |

          | src       | URL    | Specifies the path to the image          |

          | height    | pixels | Specifies the height of an image         |

          | width     | pixels | Specifies the width of an image          |


          <blockquote class='hint'>

          For more information on attributes click <a href='https://www.w3schools.com/tags/tag_img.asp'>here</a>

          </blockquote>
  - sectionTitle: A Tag
    isActive: true
    pages:
      - pageTitle: A Tag
        isActive: true
        body: >-
          # The A Tag


          - Defines a hyperlink, which is used to link from one page to another.

          - Its **href** attribute indicates the link's destination.

          - If the tag has no **href** attribute, it is only a placeholder for a hyperlink.

          - A linked page is normally displayed in the current browser window, unless you specify another target.

          - Can be styled with CSS.


          By default, links will appear as follows in all browsers:


          - An **unvisited** link is underlined and blue.

          - A **visited** link is underlined and purple.

          - An **active** link is underlined and red.
      - pageTitle: The A Tag In Action
        isActive: true
        body: |-
          # The A Tag In Action


          ```
          <a href="https://www.agileactors.com/">
          Click me to go to our website!
          </a>
          ```

          <a href="https://www.agileactors.com/" style='font-size:3em;'>
          Click me to go to our website!
          </a>
      - pageTitle: A Tag Attributes
        isActive: true
        body: >-
          # A Tag Attributes


          | Attribute | Value    | Description                                    |

          | --------- | -------- | ---------------------------------------------- |

          | href      | URL      | Specifies the URL of the page the link goes to |

          | target    | \_blank  | Specifies where to open the linked document    |

          |           | \_parent |                                                |

          |           | \_self   |                                                |

          |           | \_top    |                                                |


          <blockquote class='hint'>

          For more information on attributes click <a href='https://www.w3schools.com/tags/tag_a.asp'>here</a>

          </blockquote>
  - sectionTitle: Forms
    isActive: true
    pages:
      - pageTitle: Form
        isActive: true
        body: |-
          
          # Forms

          The `<form>` element is used to collect user input.

          <html>
           <form >
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Cena"><br><br>
            <input type="submit" value="Submit">
          </form>

          <form style="padding-left: 200px; ">
             <label >Stress busters</label><br>
            <input type="checkbox" >
            <label for="Rubber_duck"> rubberducking</label><br>
            <input type="checkbox" >
            <label for="car"> a cat</label><br>
            <input type="checkbox" >
            <label for="dog"> a dog</label><br><br>
            <input type="submit" value="Submit">
          </form>
          </html>
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Form Elements


          Some of the most useful elements the `<form>` can contain are the following


          - **`<label>`** Defines a label for an input element.

          - **`<input>`** Defines an input control.

          - **`<textarea>`** Defines a multi-line input control.

          - **`<button>`** Defines a clickable button.
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Textarea


          `<textarea>` defines a space that can be used to collect user input like comments, feedback or reviews.


          <html>

          <label for="w3review">Tell as about this training</label><br>


          <textarea id="w3review" name="w3review" rows="4" cols="50">

          I find it really...

          </textarea>

          </html>
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Input element


          The `<input>` element is the one of the most used form elements. Depending on the type attribute it can be displayed in several ways.



          <html>
           <form >
            <label>type="text"(default value)</label><br>
            <input type="text"><br>
          </form>


          <form style="padding-left: 200px; ">
             <label >type="checkbox"</label><br>
            <input type="checkbox">
          </form>


          <form style="padding-left: 200px; ">
             <label > type="radio"</label><br>
          <input type="radio">

          </form>


          <form style="padding-left: 200px; ">
             <label >type="submit"</label><br>
          <input type="submit">

          </form>


          </html>
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Syntax


          <form action="call_to_server">
            <label for="address_input" value="address">Address:</label><br>
            <input type="text" id="address_input"  ><br>
            <label for="phone_input" value="Phone">Phone:</label><br>
            <input type="text"  id="phone_input"><br><br>
            <input type="submit" value="Submit" >
          </form>



          <!DOCTYPE html>

          <html>

              <form action="call_to_server">
                  <label for="address_input" value="address">Address:</label><br>
                  <input type="text" id="address_input"  ><br>
                  <label for="phone_input" value="Phone">Phone:</label><br>
                  <input type="text"  id="phone_input"><br><br>
                  <input type="submit" value="Submit" >
              </form>

          </html>
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Syntax


          To bind a `<label>` element with an `<input> `element, you need to add the id attribute to the `<input>` element. Next, you add the **for** attribute to the `<label>`element, where the value of for is the same as the id in the `<input>` element. <br><br>


          <form action="call_to_server">
            <label for="address_input" value="address">Address:</label><br>
            <input type="text" id="address_input"  ><br>
            <label for="phone_input" value="Phone">Phone:</label><br>
            <input type="text"  id="phone_input"><br><br>
            <input type="submit" value="Submit" >
          </form>



          <!DOCTYPE html>


          ```html{2,3}
              <form action="call_to_server">
                  <label for="address_input" value="address">Address:</label><br>
                  <input type="text" id="address_input"  ><br>
                  <label for="phone_input" value="Phone">Phone:</label><br>
                  <input type="text"  id="phone_input"><br><br>
                  <input type="submit" value="Submit" >
              </form>
          ```
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Syntax


          The `<form>` element is the wrapper for the section.<br>

          The <b>action</b> attribute is triggered when the user clicks on Submit. The form-handler is typically a server page with a script for processing input data.


          <form action="call_to_server">
            <label for="address_input" value="address">Address:</label><br>
            <input type="text" id="address_input"  ><br>
            <label for="phone_input" value="Phone">Phone:</label><br>
            <input type="text"  id="phone_input"><br><br>
            <input type="submit" value="Submit" >
          </form>



          <!DOCTYPE html>


          ```html{1,7}
              <form action="call_to_server">
                  <label for="address_input" value="address">Address:</label><br>
                  <input type="text" id="address_input"  ><br>
                  <label for="phone_input" value="Phone">Phone:</label><br>
                  <input type="text"  id="phone_input"><br><br>
                  <input type="submit" value="Submit" >
              </form>
          ```
      - pageTitle: Form Elements
        isActive: true
        body: >-
          # Syntax


          By click on **Submit** will submit the form to the server.


          <form action="call_to_server">
            <label for="address_input" value="address">Address:</label><br>
            <input type="text" id="address_input"  ><br>
            <label for="phone_input" value="Phone">Phone:</label><br>
            <input type="text"  id="phone_input"><br><br>
            <input type="submit" value="Submit" >
          </form>



          <!DOCTYPE html>


          ```html{6}
              <form action="call_to_server">
                  <label for="address_input" value="address">Address:</label><br>
                  <input type="text" id="address_input"  ><br>
                  <label for="phone_input" value="Phone">Phone:</label><br>
                  <input type="text"  id="phone_input"><br><br>
                  <input type="submit" value="Submit" >
              </form>
          ```
  - sectionTitle: Tables
    isActive: true
    pages:
      - pageTitle: Tables 1
        isActive: true
        body: |-
          # Tables

          <br>

          A table in HTML consists of table cells inside rows and columns.

          - `<td>` tag stands for table data.
          - `<tr>` tag stands for table row.
          - `<th>` tag stands for table header.
      - pageTitle: Tables 2
        isActive: true
        body: |-
          # Tables Example

          <br>

          ```
          <table>
            <tr>
              <th>Row 1 Column 1</th>
              <th>Row 1 Column 2</th>
              <th>Row 1 Column 3</th>
            </tr>
            <tr>
              <td>Row 2 Column 1</td>
              <td>Row 2 Column 2</td>
              <td>Row 2 Column 3</td>
            </tr>
          </table>
          ```

          <table>
            <tr>
              <th>Row 1 Column 1</th>
              <th>Row 1 Column 2</th>
              <th>Row 1 Column 3</th>
            </tr>
            <tr>
              <td>Row 2 Column 1</td>
              <td>Row 2 Column 2</td>
              <td>Row 2 Column 3</td>
            </tr>
          </table>
      - pageTitle: Tables 3
        isActive: true
        body: >-
          # Colspan and Rowspan Attributes


          You can use colspan or rowspan attribute if you want to merge two or more columns into a single column, to do something like this:


          <table>
            <tr>
              <th colspan = "3">3 columns merged</th>
            </tr>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>      
            </tr>
            <tr>
              <td rowspan = "2">2 rows merged</td>
              <td>Row 1 Cell 2</td>
              <td>Row 1 Cell 3</td>
            </tr>
            <tr>
              <td>Row 2 Cell 2</td>
              <td>Row 2 Cell 3</td>
            </tr>

                   
          </table>
      - pageTitle: Tables 4
        isActive: true
        body: |-
          <br>

          **Code:**

          <br>

          ```
          <table>
            <tr>
              <th colspan = "3">3 columns merged</th>
            </tr>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>      
            </tr>
            <tr>
              <td rowspan = "2">2 rows merged</td>
              <td>Row 1 Cell 2</td>
              <td>Row 1 Cell 3</td>
            </tr>
            <tr>
              <td>Row 2 Cell 2</td>
              <td>Row 2 Cell 3</td>
            </tr>    
          </table>
          ```
  - sectionTitle: Lists
    isActive: true
    pages:
      - pageTitle: Lists 1
        isActive: true
        body: >-
          # Lists


          <br>


          - `<ul>` An unordered list. This will list items using plain bullets.


          <br>


          - `<ol>` An ordered list. This will use different schemes of numbers to list your items.


          <br>


          - `<dl>` A definition list. This arranges your items in the same way as they are arranged in a dictionary.
      - pageTitle: Lists 2
        isActive: true
        body: |-
          # Unordered List

          ```
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>

          ```

          <br>

          Result:

          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
      - pageTitle: Lists 3
        isActive: true
        body: |-
          # Ordered List

          ```
          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>

          ```

          <br>

          Result:


          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
  - sectionTitle: Audio And Video Tags
    isActive: true
    pages:
      - pageTitle: Audio Tag
        isActive: true
        body: >-
          # The Audio Tag


          - Can be used to embed sound content in a document.

          - Contains one or more <**source**> tags with different audio sources.

          - The text between the <**audio**> and </**audio**> tags will be displayed in browsers that do not support the element.


          **Supported audio formats:**


          - **MP3**

          - **WAV**

          - **OGG**
      - pageTitle: The Audio Tag In Action
        isActive: true
        body: |-
          # The Audio Tag In Action


          ```
          <audio controls>
            <source src="sound.ogg" type="audio/ogg">
            <source src="sound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          ```

          <audio controls>
            <source src="sound.ogg" type="audio/ogg">
            <source src="sound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
      - pageTitle: Video Tag
        isActive: true
        body: >-
          # The Video Tag


          - Can be used to embed video content in a document.

          - Contains one or more <**source**> tags with different video sources.

          - The text between the <**video**> and </**video**> tags will only be displayed in browsers that do not support the element.


          **Supported video formats:**


          - **MP4**

          - **WebM**

          - **OGG**
      - pageTitle: The Video Tag In Action
        isActive: true
        body: |-
          # The Video Tag In Action


          ```
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
          ```

          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
---
