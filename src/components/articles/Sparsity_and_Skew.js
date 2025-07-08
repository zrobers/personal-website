import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleTemplate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/thought-leadership');
  };

  return (
    <div style={styles.container}>
      {/* Back Button at Top */}
      <button onClick={goBack} style={styles.backButtonTop}>
        &larr; Back
      </button>

      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Sparsity and Skew: The Role of Bad Data in the Prominence of the Classics</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <p style={styles.subtitle}>April 22, 2025</p>
        <img
          src="/images/article-images/sparsity_and_skew.png"
          alt="Placeholder for article image"
          style={styles.heroImage}
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
            It is indisputable that the Classics, hereafter used to refer to the literature, histories, societies, and cultures of ancient Greece and Rome, remain uniquely ingrained in the modern Western ethos. Greek columns and Roman arches adorn government buildings. The works of ancient political theorists serve as a basis for the governmental structures of democratic nations. The Odyssey, Iliad, and Aeneid remain at the forefront of literature. Politicians and prominent figures still reference the words of emperors and consuls, seeking to fit themselves into their image. Ancient Greece and Rome appear endowed with a singular ability to dodge the hands of Father Time, transcending the predominant trends in chronopolitics by resisting historical obscurity. 
          </p>
          <br />
          <p>
            The enduring presence of the Classics naturally raises the question of what makes the Classics so special. Scholars and non-academics alike have long voiced their opinions on the value of the Classics. The prevailing academic belief is that ancient Greece and Rome marked periods of unparalleled advancement in artistic achievement, science, engineering, philosophy, and social systems.
          </p>
          <br />
          <p>
            In the political sphere, Mussolini and Hitler are frequently cited as dangerous examples of Classical misuse. For them, the value of the Classics was realized when they placed appeals to classical heritage at the forefront of justifications for national superiority and empirical expansion. Such justifications are not unique to infamous fascist dictators, however. Winston Churchill and Thomas Jefferson are known to have used the Classics, and more specifically classical heritage, to support their political actions. 
          </p>
          <br />
          <p>
            In a modern setting, the American conservative think tank, the Heritage Foundation, claims a classical education is uniquely positioned to “bequeath to new generations their intellectual heritage, helping them better understand themselves and the world around them.” Progressives are quick to denounce such views as misaligned and part of a constructed narrative to promote white supremacy. Recent years have also seen the introduction of classical interpretations which use the past to argue for social reform. American film director Spike Lee’s 2015 film Chi-Raq uses the Greek Comedy Lysistrata as a creative means to argue for gun reform. Recent classical adaptations, such as Madeline Miller’s Circe, which follows Odysseus’s interactions with Circe from Circe’s perspective, use selective storytelling and framing to realize more feminist ideals.  
          </p>
          <br />
          <p>
            Classical architecture, which continues to be prominently featured in government buildings throughout the continental United States, is noted to provide value by exemplifying permanence and stability. In stark contrast, classical references are also featured at the forefront of modernist movements. Tech magnets Mark Zuckerberg and Elon Musk frequently nod to Roman Emperors and literature as they strive to reinvent how people communicate and interact with one another through modern technology. 
          </p>
          <br />
          <p>
            These examples demonstrate that the value one finds in the Classics is highly dependent on the context and motives of the person calling upon the Classics.  It is nearly impossible to argue for a particular set of virtues embodied by the Classics without finding a contradictory interpretation of similar reputability and prominence. This suggests that either Classics have evolved to become ubiquitous in modern Western society or have a unique ability to adapt to the motives of a particular individual or movement. 
          </p>
          <br />
          <p>
            The following work argues the latter; that is, the Classics, relative to other historical periods, are particularly disposed to enable a broad and often contradictory range of interpretation. For this reason, dictators, feminists, and tech magnets alike find value in the Classics by using classical appeals as a soundboard for their beliefs. 
          </p>
          <br />
          <p>
            This phenomenon is posited to stem from a potent combination of unrepresentative data and generalized credibility. Classical data and scholarship is reasoned qualitatively to be sparse and skewed relative to other bodies of historical data. Subsequently, the argument shifts to demonstrate how data sparsity and skew lend way to the broad and inaccurate depictions that dominate much of modern classical reception. Lastly, the notion of classical credibility, defined as the additional reputability an argument or position gains simply by the nature of referring to the Classics, is argued to be particularly powerful and dangerous in conjunction with the sparsity and skew of classical data. 
          </p>
        </section>

        {/* Sparsity and Skew in Classical Data*/}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Sparsity and Skew in Classical Data</h2>
          <p>
            In data science, a dataset is almost always sampled from a larger domain. The best datasets gather data points from the large domain independently and identically at random. Provided the dataset contains a sufficient sample size, datasets constructed in this fashion best represent the larger domain because they are free from bias. 
          </p>
          <br />
          <p>
            Thinking of the historical record as a dataset, it is clear that the people, places, and events that populate histories are not independently and identically sampled at random from the larger body of accessible information for a particular period. In other words, Caesar and Napoleon do not dominate world history textbooks by chance: their historical prominence is a direct byproduct of their impact and influence among other more difficult-to-qualify factors. In this sense, we can say that the historical record contains inherent skew. Generally speaking, people, places, and events with more significance are disproportionately represented in histories relative to all the people, places, and events that existed or occurred in a particular period. 
          </p>
          <br />
          <p>
            French historian Pierre Nora’s seminal work “Between Memory and History: Les Lieux de Mémoire” effectively detects this skew, in what he refers to as a discrepancy between “real memory” and history or, as he puts it, how “hopelessly forgetful modern societies, propelled by change, organize the past.” Furthermore, Nora reasons that this discrepancy or skew widens over time. As time elapses, historical records become more dominated by Caesars and revolutions, and less representative of the actual memories of people who lived in those eras. 
          </p>
          <br />
          <p>
            This trend is especially concerning for the Classics for two reasons. First, the Classics, relative to other periods that continue to exert a significant active influence on the present, such as the Enlightenment or Italian Renaissance, occurred much further in the past. This amounts to more time for the gap between actuality and our skewed historical representation to widen. Second, the Classics have a particular affinity for the ‘great man,’ meaning the collective memory of people who lived in the classical era was already skewed to be dominated by a select number of prominent figures (e.g. the emperor or consuls in Rome). An elite-centered focus marginalized the voices of the average habitant of ancient Greece and Rome, instead devoting the majority of attention to a select few who wielded the majority of wealth and power. 
          </p>
          <br />
          <p>
            Another factor contributing to the skew in classical sources is the availability of primary sources. The general consensus of the scholarly community is that the vast majority of classical literature has been lost. This makes primary source data for the Classics notably sparse, meaning there exists a limited collection of accessible information that is a first-hand artifact of classical life.
          </p>
          <br />
          <p>
             Surviving archaeological evidence and literature tends to originate from few locations relative to the vast scope of the civilizations in question. Under the assumption that these sites were not preserved and excavated randomly, this reality introduces skew to the body of classical data before the preceding skew-introducing phenomena could take effect. Sparsity and skew also go hand-in-hand in that sparse historical data is more subject to becoming skewed as time progresses. If only a small portion of data persists, it is difficult for the entire historical record to level out the “noise” of a few outliers. Presented with a less sparse dataset, sample size counteracts noise and outliers, allowing data scientists to focus on the prevailing trends. When a dataset is smaller, however, the outliers cannot be as easily attributed to rare events not demonstrative of the prevailing trends, warranting a greater analysis of these events even if they are largely a distraction from the reality of the larger domain the dataset seeks to represent. 
          </p>
          <br />
          <p>
            These trends are only magnified by an obsession with the classical canon, an imposed subset of the already sparse and skewed classical data, selected on largely subjective premises. In “Canon Creation/Destruction and Cultural Formation: Authority, Reception, Canonicity, Marginality,” John Paupadopolus argues that cultural authorities have long tried to dictate which pieces of classical art and literature are held in high regard, oftentimes in an attempt to align the reception of the Classics with their agenda or preferences. In the case of Greek literature, Paupadopolus notes that 18 or 19 of the 90 plays written by Athenian Tragedian Euripides survive, a much higher percentage than the 7 of 120 plays written by Sophocles, who was a much more popular playwright in Athens in the same time. This result is not a matter of chance; rather, it is a direct byproduct of Euripedes’ works taking a prominent place in the canon of Southern Italy in the preceding centuries. In the modern era, practitioners of the discipline of classical studies provide more careful attention to the whole body of classical works, though the idea of a classical canon is as strong as ever in the public sphere. The average undergraduate-educated American is likely to have heard of or encountered the Odyssey, Iliad, or Aeneid, but do not know Virgil’s poetry or Cicero’s philosophies even though these texts are at the forefront of classical studies. Thanks to robust digital records and bountiful libraries, we are no longer at risk of losing access to the works that do not reside in the modern popularized classical canon. However, canon development is still a concerning phenomenon for the reception of the classical dataset. Not only does the whole of accessible classical data remain sparse and skewed, in part thanks to canon formation in the distant past, but modern canonization leads the general public to endow only a small portion of classical artifacts as worthy of attention. 
          </p>
        </section>

        {/* The Exploitation of Sparse and Skewed Data*/}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Exploitation of Sparse and Skewed Data</h2>
          <p>
            The sparsity and skew of the classical dataset have a tremendous impact on its reception. The skew of the data means that people, places, and events that dominate our perception of the Classics do not represent classical society as a whole, instead lying on the extremities of the complete historical record. Furthermore, the sparsity of the classical dataset, especially in public perception, means that there are only a few canonical examples that the average person tends to associate with the ancient Greeks and Romans. Rather than historically accurate trends or normative metrics dominating the afterlife of the Classics, Caesar, the Coliseum, the Spartans, and the Odyssey are amongst a small set of enduring presences that have conquered the modern classical imagination. 
          </p>
          <br />
          <p>
            This reality quickly turns dangerous when one seeks to exploit the Classics to support an argument. If the classical record is reducible to merely a few examples, all it takes for one to imply a connection between the entire period and their particular stance is a connection between one of these examples and their argument. In other words, the Classics are uniquely disposed to enable one anecdote to serve as the voice for all antiquity. As alluded to in the introduction in the discussion on contradictory interpretations and discussed through examples later on, these links between the dominating classical examples and a vast diversity of arguments are not hard to find. Even though there is a sparse set of classical data in the public sphere, there is a robust amount of information and interpretations of the particular elements within this set. If one searches deep enough, one can likely find a link between a dominating classical example and practically any modern stance. Due to this adaptability, the Classics provide value to those who seek to argue through historical precedent by offering them an easy means to do so. 
          </p>
        </section>

        {/* Classical Credibility */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Classical Credibility</h2>
          <p>
            Arguments formed by linking to a skewed and sparse depiction of the classical past are further bolstered by the credibility the Classics carry in the modern Western world. Guided by empirical observations on the wider usage of the term, classicist Rafat Toczko induces that for something to be  “classic” it must have four attributes: it must be “(1) unique, (2) widely thought to be of exceptional quality, (3) gladly, willingly revisited in the memory, and (4) of apparently enduring, lasting value.” For classical antiquity to be endowed with the same word at its base certainly implies that similar connotations are extended to Ancient Greece and Rome. We need not look far into modern classical reception to confirm that Tocsko’s classic qualities indeed extend to how the moderately informed public envisions the Classical era. In the Western world, classical artifacts are prominently featured in the most-visited museums, intended to house items believed to have prevailing value. The very existence of classical studies departments at the world's most highly regarded universities invokes a sense that classical antiquity is deserving of being singled out and studied by the brightest minds. More so, the recent success in merging the Classics and public humanities by focusing on more outward-facing research projects confirms that this admiration for the Classics extends beyond a small community of academics.
          </p>
          <br />
          <p>
            The popular fascination and enduring respect for the classical era naturally lend way to credibility when an association links the Classics to some relevant aspect of the modern world. The logic behind this phenomenon is fairly naïve and non-universal, but tends to follow a pattern like this: “Because [Insert Classical Persona/Phenomenon/Relic] demonstrated this and we, the generalized Western world, believe that Classical antiquity holds enduring value, then this is a more credible position in the present.” Arguments of this type, though typically more nuanced, are commonplace. The founding fathers invoked Cicero’s arguments on civic duty in conjunction with the respect that the classically educated ruling class’ admiration of antiquity (largely stemming from their classical education) to bolster support for the founding principles of the United States. Olympic revitalization efforts of the late 19th century were, amongst other supporting arguments, founded on the notion that the games had such great significance to Ancient Greece, which makes them worthwhile to emulate. In a more trivial and modern example, American self-help author Ryan Holiday uses the admiration the general public holds for the Classics to bolster the credibility of his books which prominently feature stoic ideals. 
          </p>
        </section>

        {/* A Dangerous Combination */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>A Dangerous Combination</h2>
          <p>
            The founding of the United States, Olympic revitalization, and stoic self-help books are arguably positive developments that draw on the credibility of the Classics through reasonable parallels. However, the sparsity and skew of the classical dataset make it feasible for one to couple classical credibility with a particular aspect of the Greco-Roman past that is unrepresentative of the larger historical trends.
          </p>
          <br />
          <p>
            For those looking for a simple means to garnish rhetorical persuasiveness, this is an incredibly valuable tool: one can craft an argument that seems to carry the support of the Classics almost completely independent of the actual contents of their argument. In the wrong hands, however, the potent combination of credibility and a sparse and skewed popularized classical record can easily lend way to instances of misuse. 
          </p>
          <br />
          <p>
            Fascist dictators of the twentieth century are the most egregious offenders in this regard. In unearthing Roman monuments, particularly the Ara Pacis of Augustus, and marking the founding of Rome with a national holiday, Mussolini built a link between his regime and the public perception of the glorious emergence of Rome. Within the sparse and skewed classical public dataset, he pulled out a particular image of might, prosperity, and expansion commonly associated with the reign of Augustus and the emergence of Rome as he sought to form his empire. Had the classical dataset been more robust and evenly distributed, such an image would have faded into the background. At the very least, the realities of the common man in Rome, even under a period of prosperity, would have to be processed alongside this picture of might and empirical prosperity, making such a persuasive link more difficult to conjure.
          </p>
          <br />
          <p>
            Similar patterns of classical misuse need not be as historically consequential. Social media circles promoting alt-right viewpoints in the modern day have been noted to call upon a small sect of stoic philosophy to link the Classics to their political beliefs, once more relying on the sparsity and skew of the classical dataset to transfer the entirety of classical credibility using an unrepresentative sample. One of the loudest voices in American politics, Elon Musk, is not immune to the unique rhetorical value that the Classics provide. Amongst numerous classical references on his social media accounts, he once posted a single quote from Tacitus pronouncing “The more corrupt the state, the more numerous the laws” to justify his efforts towards a reduction in government oversight and regulation. Since Tacitus is among a small number of Roman scholars whose name resonates with the modern educated public, it's easy for his point of view to be conflated with that which dominated Classical Antiquity. Couple this with classical credibility, and then suddenly Musk has a convincing argument completely ignorant of the fact that Tacitus’ quote is a single data point undoubtedly countered by numerous opposite perspectives throughout the Greco-Roman past. 
          </p>
        </section>

        {/* Conclusion */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Conclusion</h2>
          <p>
            The past, particularly the classical past, has a great deal to tell us. Classical tradition is not reducible to Caesar, the Spartans, and the Odyssey like the prevailing sparse and skewed classical dataset seems to indicate. A more holistic viewpoint, which extracts demonstrated patterns and trends from what remains of the classical record to form justifiable insights, can provide real value for modern civilizations. 
          </p>
          <br />
          <p>
            The concerning reality is that the sparsity and skew of the classical dataset coupled with the credibility that antiquity continues to hold in the modern eye makes the continuation of a narrow-minded public perception of the Classics of great rhetorical value to those intent on exploiting it. Absent a change in how the public perceives the remaining classical data, social media groups will continue to use a small piece of Classical philosophy to justify their radical beliefs, rogue politicians will call upon Roman emperors in their speeches, and the next fascist European dictator will justify their reign as the continuation of Greco-Roman prosperity. 
          </p>
          <br />
          <p>
            This discipline of classical studies is faced with a challenging choice: descend to the ranks of populism and embrace the demonstrated trend of sparsity and skew in classical data or push back against unjustified classical connections, enforcing historically accurate trends and patterns to dominate the classical narrative. The risk is falling into obscurity: can the Classics survive without the people who exploit them through unjustified representations?
          </p>
        </section>

        {/* Bibliography */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Bibliography</h3>
          <ol style={styles.sourceList}>
            <li>Roche, Helen. "Mussolini’s ‘Third Rome’, Hitler’s Third Reich and the Allure of Antiquity." Fascism 8, no. 2 (2019).</li>
            <li>Richard, Carl J. <em>The Founders and the Classics: Greece, Rome, and the American Enlightenment</em>. Harvard University Press, 1995.</li>
            <li>Cambre, Rachel Alexander. “Classical Education’s Remedy for America’s Loneliness Epidemic.” The Heritage Foundation. Accessed April 22, 2025.</li>
            <li>Sarwar, Rizwana, and Saadia Fatima. "Madeline Miller’s Circe: A Feminist Stylistic Approach." Perennial Journal of History 3, no. 2 (2022).</li>
            <li>James, Gareth, Daniela Witten, Trevor Hastie, and Robert Tibshirani. <em>An Introduction to Statistical Learning</em>. Springer, 2013.</li>
            <li>Nora, Pierre. "Between Memory and History: Les Lieux de Mémoire." Representations (1989).</li>
            <li>Ferrario, Sarah Brown. <em>Historical Agency and the Great Man in Classical Greece</em>. Cambridge University Press, 2014.</li>
            <li>Von Albrecht, Michael. <em>A History of Roman Literature</em>. Brill, 2019.</li>
            <li>Davies, John K. “Classical Greece: Production.” In <em>The Cambridge Economic History of the Greco-Roman World</em>, 2007.</li>
            <li>Papadopoulos, John K. "Canon Creation/Destruction and Cultural Formation." GRECO-ROMAN STUDIES IN ANCHORING INNOVATION (2022).</li>
            <li>Toczko, Rafat. “Why Should We Save the Classical Tradition?” Antigone: A Magazine for Classicists, 2022.</li>
            <li>Kindt, Julia. "Classical Studies and the Public Humanities." Public Humanities 1 (2025).</li>
            <li>Bishop, Michael F. “The Founding Fathers and the Inspiration of Rome.” Grateful American® Foundation, 2021.</li>
            <li>Gold, John R., and Margaret M. Gold. "Revival and Reinvention: the Olympic Games, Athens 1896." 2021.</li>
            <li>Holiday, Ryan. “Books and Courses.” RyanHoliday.net, 2022.</li>
            <li>Zuckerberg, Donna. <em>Not All Dead White Men: Classics and Misogyny in the Digital Age</em>. Harvard University Press, 2018.</li>
            <li>“When the Richest Man in the World Loves Classics.” Pharos, January 31, 2025.</li>
          </ol>
        </section>

        {/* Back Button at Bottom */}
        <button onClick={goBack} style={styles.backButtonBottom}>
          Thought Leadership Home
        </button>
      </article>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  backButtonTop: {
    margin: '10px 0',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  backButtonBottom: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: '1px solid #2e4075',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  article: {
    marginTop: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2e4075',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;
