const MyExperience = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">My Journey with Jane Austen</h1>
      
      <div className="prose lg:prose-xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">First Encounter with Pride and Prejudice</h2>
          <p>
            My journey with Jane Austen began with Pride and Prejudice, where I was immediately 
            captivated by Elizabeth Bennet's wit and Mr. Darcy's character development. The famous 
            first line, "It is a truth universally acknowledged, that a single man in possession 
            of a good fortune, must be in want of a wife," introduced me to Austen's masterful 
            irony and social commentary.
          </p>
          <p className="mt-4">
            What struck me most was how Elizabeth's prejudice against Mr. Darcy mirrored his pride, 
            creating a perfect character foil. The way their relationship evolved through 
            misunderstandings, particularly after the first proposal scene at Hunsford Parsonage, 
            showed me the complexity of Austen's character development.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Character Analysis and Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Favorite Heroines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Emma Woodhouse</span> - Her journey from 
                matchmaking hubris to self-awareness, especially in her treatment of Harriet 
                Smith and her realization about Mr. Knightley, is masterfully crafted</li>
                <li><span className="font-semibold">Anne Elliot</span> - In Persuasion, her 
                quiet strength and second chance at love with Captain Wentworth touched me deeply</li>
                <li><span className="font-semibold">Elinor Dashwood</span> - Her sense and 
                emotional restraint in dealing with Edward Ferrars's secret engagement showed 
                incredible strength</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Memorable Supporting Characters</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Mr. Collins</span> - His ridiculous 
                pomposity and obsequious nature towards Lady Catherine de Bourgh perfectly 
                exemplifies Austen's satirical wit</li>
                <li><span className="font-semibold">Mary Crawford</span> - Her worldliness 
                and wit in Mansfield Park provide a fascinating contrast to Fanny Price's 
                moral steadfastness</li>
                <li><span className="font-semibold">Mrs. Jennings</span> - Her good-hearted 
                but overwhelming personality in Sense and Sensibility shows Austen's talent 
                for creating nuanced characters</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Austen's Writing Techniques</h2>
          <p>
            What fascinates me most about Austen's writing is her use of free indirect 
            discourse, particularly evident in Emma. The way she blends the narrator's voice 
            with Emma's thoughts creates an intimate yet ironic portrayal of her protagonist's 
            mistakes and growth.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Notable Literary Devices</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Her use of letters (Darcy's letter to Elizabeth, Wentworth's letter to Anne) 
              as plot devices and character revelation</li>
              <li>The symbolism in Emma, such as the Box Hill incident representing Emma's 
              moral low point</li>
              <li>The weather imagery in Persuasion reflecting Anne's emotional state</li>
              <li>The parallel courtships in Pride and Prejudice (Jane/Bingley, 
              Elizabeth/Darcy, Lydia/Wickham)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Social Commentary and Themes</h2>
          <p>
            Reading Austen's works opened my eyes to the subtle yet powerful way she critiques 
            Regency society. In Mansfield Park, the contrast between the Bertrams and Fanny 
            Price's family explores class mobility and moral education. The treatment of the 
            Elliots' financial troubles in Persuasion reveals the declining gentry class.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Recurring Themes I've Noticed</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marriage as both social and economic contract (Charlotte Lucas's practical 
              choice in Pride and Prejudice)</li>
              <li>The importance of female education and moral development (Catherine 
              Morland's growth in Northanger Abbey)</li>
              <li>The power dynamics between social classes (Emma's relationship with 
              Harriet Smith)</li>
              <li>The role of property and inheritance (The entail in Pride and Prejudice, 
              Norland in Sense and Sensibility)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Personal Impact and Favorite Moments</h2>
          <p>
            Each of Austen's novels has left an indelible mark on my understanding of 
            literature. Some of my favorite moments include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>The tension during the Netherfield Ball in Pride and Prejudice</li>
            <li>Emma's realization of her feelings for Mr. Knightley during the Crown Inn ball</li>
            <li>Captain Wentworth's letter to Anne ("You pierce my soul...")</li>
            <li>Marianne's emotional growth after her near-fatal illness in Sense and Sensibility</li>
            <li>Henry Tilney's gentle mockery of Gothic novels in Northanger Abbey</li>
          </ul>
          <p className="mt-4">
            What continues to amaze me is how Austen manages to create such universal stories 
            while working within the seemingly limited scope of country society life. Her 
            understanding of human nature and social dynamics remains remarkably relevant today.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MyExperience;
