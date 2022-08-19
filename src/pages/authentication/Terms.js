import { Box, Button, Typography, useTheme } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Terms = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    return (
        <Box>
            <Box width="100%" sx={{ display: "flex", justifyContent: "end", marginBottom: 2 }}>
                <Button
                    variant="outlined"
                    sx={{ color: theme.palette.grey[900] }}
                    startIcon={<FontAwesomeIcon fixedWidth size="6x" icon={faArrowLeft} />}
                    onClick={() => navigate("/auth/signin", { replace: true })}
                >
                    Back
                </Button>
            </Box>
            <Typography variant="h3">
                Terms and Conditions
                Welcome to Apped!
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: 1 }}>
                These terms and conditions outline the rules and regulations for the use of Apped's Website, located at www.apped.be.

                By accessing this website, we assume you accept these terms and conditions.Do not continue to use Apped if you do not agree to take all of the terms and conditions stated on this page.
            </Typography>
            <Typography variant="h4" sx={{ paddingTop: 1 }}>
                Cookies:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>
                The website uses cookies to help personalize your online experience.By accessing Apped, you agreed to use the required cookies.

                A cookie is a text file that is placed on your hard disk by a web page server.Cookies cannot be used to run programs or deliver viruses to your computer.Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.

                We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website.You have the ability to accept or decline optional Cookies.There are some required Cookies that are necessary for the operation of our website.These cookies do not require your consent as they always work.Please keep in mind that by accepting required Cookies, you also accept third - party Cookies, which might be used via third - party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
            </Typography>

            <Typography variant="h4" sx={{ paddingTop: 1 }}>

                License:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                Unless otherwise stated, Apped and / or its licensors own the intellectual property rights for all material on Apped.All intellectual property rights are reserved.You may access this from Apped for your own personal use subjected to restrictions set in these terms and conditions.
            </Typography>

            <Typography variant="subtitle1" sx={{ paddingTop: 1 }}>

                You must not:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                Copy or republish material from Apped
                Sell, rent, or sub - license material from Apped
                Reproduce, duplicate or copy material from Apped
                Redistribute content from Apped
                This Agreement shall begin on the date hereof.

                Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website.Apped does not filter, edit, publish or review Comments before their presence on the website.Comments do not reflect the views and opinions of Apped, its agents, and / or affiliates.Comments reflect the views and opinions of the person who posts their views and opinions.To the extent permitted by applicable laws, Apped shall not be liable for the Comments or any liability, damages, or expenses caused and / or suffered as a result of any use of and / or posting of and / or appearance of the Comments on this website.

                Apped reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
            </Typography>

            <Typography variant="subtitle1" sx={{ paddingTop: 1 }}>

                You warrant and represent that:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
                The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.
                The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                You hereby grant Apped a non - exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
            </Typography>

            <Typography variant="subtitle1" sx={{ paddingTop: 1 }}>

                Hyperlinking to our Content:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                The following organizations may link to our Website without prior written approval:

                Government agencies;
                Search engines;
                News organizations;
                Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                System - wide Accredited Businesses except soliciting non - profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and / or services; and(c) fits within the context of the linking party's site.
            </Typography>

            <Typography variant="subtitle1" sx={{ paddingTop: 1 }}>

                We may consider and approve other link requests from the following types of organizations:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                commonly - known consumer and / or business information sources;
                dot.com community sites;
                associations or other groups representing charities;
                online directory distributors;
                internet portals;
                accounting, law, and consulting firms; and
                educational institutions and trade associations.
                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Apped; and(d) the link is in the context of general resource information.

                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and(c) fits within the context of the linking party's site.

                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e - mail to Apped.Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link.Wait 2 - 3 weeks for a response.

                Approved organizations may hyperlink to our Website as follows:

                By use of our corporate name; or
                By use of the uniform resource locator being linked to; or
                Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
                No use of Apped's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </Typography>

            <Typography variant="h4" sx={{ paddingTop: 1 }}>

                Content Liability:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                We shall not be held responsible for any content that appears on your Website.You agree to protect and defend us against all claims that are raised on your Website.No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </Typography>

            <Typography variant="h4" sx={{ paddingTop: 1 }}>

                Reservation of Rights:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                We reserve the right to request that you remove all links or any particular link to our Website.You approve to immediately remove all links to our Website upon request.We also reserve the right to amend these terms and conditions and its linking policy at any time.By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </Typography>

            <Typography variant="h4" sx={{ paddingTop: 1 }}>

                Removal of links from our website:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment.We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.

                We do not ensure that the information on this website is correct.We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </Typography>

            <Typography variant="h4" sx={{ paddingTop: 1 }}>

                Disclaimer:
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>

                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.Nothing in this disclaimer will:

                limit or exclude our or your liability for death or personal injury;
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                limit any of our or your liabilities in any way that is not permitted under applicable law; or
                exclude any of our or your liabilities that may not be excluded under applicable law.
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and(b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.

                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</Typography>
        </Box >)
}

export default Terms