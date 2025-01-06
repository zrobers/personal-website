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
        <h1 style={styles.title}>How often do men think about the Roman Empire? Misconceptions of Roman Masculinity</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/roman-masculinity.jpg" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Introduction Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
          In September 2023, women worldwide asked their male friends or partners a simple question: “How often do you think about the Roman Empire?” Short clips of men responding to this question rapidly circulated across the social media platforms TikTok and Instagram, driven by shockingly high responses. Entertainment value aside, these clips imply a strong correlation between gender and the amount of time one spends pondering the likes of Caesar and Constantine, underscoring the prevalent belief that Ancient Rome has distinctly masculine undertones. USA Today Columnist Rex Huppke was not immune to the gendered connotations of the trend, satirically commenting that his lack of thoughts about the Roman Empire made him feel “insecure.” In his column, Huppke doubles down on the perceived manliness of Ancient Rome, citing “gladiators and swords and towering marble columns” as evidence that Roman society was “man-centric.” This social media trend and Huppke’s column contribute to general misconceptions of the degree to which Roman Society conforms to modern interpretations of masculinity. While the power dynamic in Ancient Rome was undoubtedly dominated by men, the claim that Rome was distinctly a man’s world, as perpetuated by the “How often do men think about the Roman Empire?” trend and Huppke’s column, is often exaggerated and falsely justified. Ultimately, the modern narrative overstates the degree to which warfare dominated Rome, diminishes the behind-the-scenes role of women, and discounts the presence of art, literature, and philosophy relative to barbaric spectacles such as the gladiatorial games. Furthermore, standards for masculinity in the ancient world fundamentally differ from modern interpretations of manliness, further separating beliefs that Ancient Rome was manly from reality.
          </p>
        </section>

        {/* Overstated Military Presence in the Republic and Empire */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Overstated Military Presence in the Republic and Empire</h2>
          <p>
          Given the historical delegation of military operations to men, it is no surprise that the notion of Rome as a militaristic, war-mongering society is used to perpetuate the conception that Rome was especially masculine. In particular, Huppke suggests a return to a “Roman-Empire-style patriarchy” would “create a place of near-constant war.” However, the prevalence of warfare within the Roman world is often overstated. For much of the history of Roman Civilization, military service was reserved for property owners. Until the tribuneship of Gaius Marius and the Marian Reforms, property ownership was required for Roman military service. Considering land was highly concentrated among the Patricians, this policy limited warfare to a practice of the ruling elites. 
          </p>
          <br />
          <p>
          Furthermore, mainstream interpretations of Roman History suggest that Rome was a civilization constantly at war. Yet, relative to modern nations, such as the United States, Rome was typically engaged in less external conflicts, as indicated by the figure below.   
          </p>
          <br />
          <figure style={{ textAlign: 'center' }}>
                <img src="/images/article-images/conflict-chart.png" alt="Illustration of the deductive and inductive frameworks" style={styles.figureImage} />
                <figcaption style={{ fontSize: 'smaller', fontStyle: 'italic' }}>
                    Figure 1:  Comparison of Active External Conflicts at a Given Time Between the United States and the Roman Republic and Empire
                </figcaption>
          </figure>
          <br />
          <p>
          The analysis presented by this figure is complicated by differences in the scale and impact of modern and ancient conflicts along with the availability and reliability of data on the existence and duration of each ancient conflict. However, it demonstrates the critical qualitative observation that modern nations, such as the United States, tend to engage in external military conflicts at a comparable or higher rate to the Roman Republic and Empire. Effectively, this observation counters the perception that Ancient Rome was more eager to engage in military conflict. 
          </p>
          <br />
          <p>
          Furthermore, extended periods of peace and prosperity, rather than rampant warfare, characterized many Roman Eras. During the Pax Romana under Augustus (27 BC - 14 AD), economic expansion dominated the Roman landscape as opposed to military conquest and masculine displays of force. Likewise, the Period of Five Good Emperors (96 AD - 180 AD) proved so prosperous that 18th-century historian Edward Gibbon would later proclaim: “If a man were called to fix the period in the history of the world, during which the condition of the human race was the most happy and prosperous, he would, without hesitation, name that which elapsed from the death of Domitian to the accession of Commodus”. As Gibbon’s testimony indicates, war did not always dominate the Roman landscape as the Roman Empire also fostered unparalleled periods of peace and prosperity.
          </p>
          <br />
          <p>
          Altogether, the limited participation in warfare, prevalence of periods of war relative to modern societies, and existence of significant periods of peace serve to reject the narrative that the Roman Empire was a society characterized by unprecedented militarism and constant warfare. Given military force and war are commonly associated with modern masculinity, the overstatement of Ancient Rome’s militarism contributes to the false notion that Rome was notably “man-centric” by modern standards.
          </p>
        </section>

        {/* Diminished Role of the Roman Woman */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Diminished Role of the Roman Woman</h2>
          <p>
          Huppke’s column is among numerous written works that perpetuate the idea that Roman society was characterized by limited rights for women, leading him and others to falsely conflate Rome with masculinity. Indeed, Roman law ensured that men dominated leadership positions and controlled financial matters, contributing to the conception that Rome was a man’s world. However, Roman women played a consistent behind-the-scenes role in influencing the course of Roman History that is often missing or understated in historical accounts. Amidst the heightened tensions spurred by the land reforms of Tiberius Gracchus, it was Cornelia, the mother of the Gracchi brothers, who stepped in as a moral force to guide the republic to stability. In response to the imposition of a tax on wealthy Roman women, Hortensia stood up for her rights, making a speech directed at the second triumvirate. And it was Fulvia, the wife of Mark Antony, who engaged Octavian in the Perusine War, escalating political tensions that eventually led to the dissolution of the republic.
          </p>
          <br />
          <p>
          These women exemplified a sense of agency and social influence uncharacteristic of most civilizations until modern times. Furthermore, the limited rights of aristocratic women were notably generous for their time. According to historian Jane F. Gardner, “[Roman] women had rights and legal protections that were unusual in the ancient world ”. For instance, the “Ius trium liberorum” or “the right of three children” provided elite women with financial and legal autonomy should they bear three or more children. While Huppke and others are correct to brand Ancient Rome as “highly man-centric” relative to modern times, policies like the right of three children serve to support the idea that Rome embodied progressive viewpoints on gender roles, rejecting claims of unconfined male dominance.
          </p>
        </section>

        {/* The Prominence of Art, Literature, and Philosophy in Roman Society */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Prominence of Art, Literature, and Philosophy in Roman Society</h2>
          <p>
          Huppke presents the extracurricular endeavors of Ancient Romans as especially barbaric, noting the presence of “gladiators and swords.” This justification for the masculinity of the Roman world fails to account for the academic endeavors of the Roman elites. An astute focus on the arts, literature, and philosophy suggests a more civilized society with an intent focus on non-gendered activities. 
          </p>
          <br />
          <p>
          The Roman Forum serves as perhaps the most outward sign of the attention the Romans paid to the arts. Decadent architecture and detailed statues capture an immense focus on the perceived beauty of one’s surroundings. Roman architectural advancements, formed through careful reflection on structural stability and aesthetics, proved so prominent that buildings today still contain many Roman characteristics. 
          </p>
          <br />
          <p>
          From Vergil’s Aneid to Ovid’s Metamorphoses, Roman literature deploys poetic language to conjure complex emotional responses, again displaying an academic and civilized side of Roman society. For instance, Ovid writes in Metamorphoses, “In the make-up of human beings, intelligence counts for more than our hands, and that is our true strength”. Not only does this profound statement serve as a literal rejection of the barbarian narrative, one can see in the writing of Ovid and others a desire to express language artfully. 
          </p>
          <br />
          <p>
          Rather than supporting the endless pursuit of conquest, Roman philosophies champion living a life with a nuanced appreciation for existence and morality. One prominent school of thought in Ancient Rome, stoicism, emphasizes living a virtuous life. Emperor Marcus Aurelius, a stoic, wrote that a man should “waste no more time arguing about what a good man should be” and rather just “be one”. Auerulius’ desire for personal growth and self-control once more defies the barbaric narrative as Roman philosophies place values over pleasure and brute masculinity.   
          </p>
        </section>

        {/* Differences in Ancient and Modern Conceptions of Masculinity */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Differences in Ancient and Modern Conceptions of Masculinity</h2>
          <p>
          While numerous factors demonstrate how Ancient Roman society failed to conform to modern masculinity, it is also important to note a disconnect between how the Romans defined masculinity compared to the present day. In the Greco-Roman world, masculinity was less intertwined with anatomical sex, functioning as an idealized way to live one’s life. Masculinity centered on virtue, with a particular emphasis on self-control. The Romans did not idolize the pursuit of tyrannical power and luxury but rather felt that such pursuits made one effeminate. Furthermore, the gender of one’s sexual partners did not play a role in determining their masculinity. Men could freely engage in homosexual acts without damage to their perception, so long as they were the dominant/active partner.
          </p>
          <br />
          <p>
          In contrast, modern masculinity is far more superficial, centering around strength, aggression, and power while disparaging homosexual relations. These critical differences between modern and ancient masculinity further invalidate claims that Rome was a distinctly masculine civilization by modern standards as Roman men did not seek to espouse the same characteristics as modern masculinity idolizes. Furthermore, pursuing masculinity was not solely a matter for the Roman man, making it more difficult to associate Rome with a particular gender.  
          </p>
        </section>

         {/* Conclusion */}
         <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Conclusion</h2>
          <p>
          The “How often do men think about the Roman Empire?” social media trend and Huppke’s column support the notion that the Roman Republic and Empire was a particularly masculine civilization. However, an examination of the justification for these claims, including militarism, barbaric activities, and the diminished role of the Roman woman results, shows that relative to other historical groups, the Romans did not possess a tendency to prioritize the Roman man or manly characteristics. Instead, the Romans offered progressive social standing and rights to aristocratic women, engaged in less warfare than mainstream interpretations of Roman History suggest, and prioritized scholarly endeavors. Along with a discrepancy between Roman and modern interpretations of masculinity, these findings disrupt the gendered foundation for the “How often do men think about the Roman Empire?” social media trend and Huppke’s claim that Rome was “highly man-centric.”
          </p>
        </section>

        {/* Sources Section */}
        <section style={styles.sources}>
            <h3 style={styles.sectionTitle}>Sources</h3>
            <ol style={styles.sourceList}>
                <li>Huppke, Rex. “I Never Think about the Roman Empire. Does This Mean I’ll Lose My Man Card?” *USA Today,* September 21, 2023. <a href="https://www.usatoday.com/story/opinion/columnist/2023/09/21/men-think-roman-empire-tiktok-trend-state-masculinity/70912148007/">https://www.usatoday.com/story/opinion/columnist/2023/09/21/men-think-roman-empire-tiktok-trend-state-masculinity/70912148007/</a>.</li>
                <li>Gambino, Michael C. "The Military Reforms of Gaius Marius in their Social, Economic, and Political Context." August 2015.</li>
                <li>Stephenson, Andrew. *Public Lands and Agrarian Laws of the Roman Republic.* Project Gutenberg, 2004. Accessed April 26, 2024.</li>
                <li>Goldsworthy, Adrian. *Pax Romana: War, Peace and Conquest in the Roman World.* Hachette UK, 2016.</li>
                <li>Gibbon, Edward. *The History of the Decline and Fall of the Roman Empire.* Edited by David Womersley. 3 vols. Penguin Classics, 1994.</li>
                <li>Gardner, Jane F. *Women in Roman Law and Society.* Routledge, 2008.</li>
                <li>Anderson, William S., ed. *Ovid's Metamorphoses.* University of Oklahoma Press, 1997.</li>
                <li>Aurelius, Marcus. *Meditations.* Penguin, 2015.</li>
                <li>Asikainen, Susanna. "Masculinities in the Ancient Greco-Roman World." In *Jesus and Other Men,* pp. 19-45. Brill, 2018.</li>
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
    color: '#2e4075'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
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
  sup: {
    fontSize: '0.8rem',
    verticalAlign: 'super',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;
