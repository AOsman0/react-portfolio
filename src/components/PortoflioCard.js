import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import LibraryImg from "../images/library.jpeg";
import Mentoring from "../images/mentoring.png";
import Quiz from "../images/quizes.png";
import Weather from "../images/weatherr.webp";
import Ecommerce from "../images/e commerce.jpeg";
import Notes from "../images/notes.jpeg";
import Regex from "../images/regex.jpeg";
import SocialMedia from "../images/social media.png";
import PWA from "../images/pwa.webp";

export const PortfolioCard = ({}) => {
  return (
    <div>
      <Grid container spacing={7} className="grid-container">
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={LibraryImg}
              alt="library Of Knowledge"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Library Of Knowledge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create a unique space
                in which they can seek knowledge.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/library-of-knowledge"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Quiz}
              alt="MentorMe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Code Quiz
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create a coding quiz
                which test the users coding ability.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/code-quiz/tree/dev"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Weather}
              alt="Weather DashBoard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weather DashBoard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was to create a weather dashboard which
                will tell you the weather of your location in Real Time.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/weather-dashboard/tree/main"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Mentoring}
              alt="MentorMe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MentorMe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create a platform to
                match coding mentors with coding mentees.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/Am0031/coding-mentoring"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Ecommerce}
              alt="E-Commerce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-Commerce
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to build the back end
                for an e-commerce site
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/e-commerce-back-end/tree/dev"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Notes}
              alt="Note Taker"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Note Taker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create a note taking
                app in which user can save there notes and delete them.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/note-taker/tree/main"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Regex}
              alt="Regex Tutorial"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Regex Tutorial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create a tutorial
                describing a regex in detail and using a example.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://gist.github.com/AOsman0/fe9b7ced94eb07bb93a428b73b6cb2ed"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={SocialMedia}
              alt="Social Network"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Social Network API
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The idea of this project was being able to create is to build an
                API for a social network web application where users can share
                their thoughts, react to friend and thoughts.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/social-network-api/tree/dev"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={PWA} alt="pwa" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PWA-Text-Editor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The task is to build a text editor that runs in the browser. The
                app will be a single-page application that meets the PWA
                criteria.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://github.com/AOsman0/pwa-text-editor/tree/dev"
                  className="github-link"
                >
                  GitHub Link
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
