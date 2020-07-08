using Microsoft.AspNetCore.Mvc;
using Gifter.Data;
using Gifter.Repositories;
using Gifter.Models;
using Microsoft.AspNetCore.Authorization;

namespace Gifter.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileRepository _profileRepository;
        public UserProfileController(ApplicationDbContext context)
        {
            _profileRepository = new UserProfileRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_profileRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(string FirebaseId)
        {
            var post = _profileRepository.GetByFirebaseId(FirebaseId);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult UserProfile(UserProfile post)
        {
            _profileRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _profileRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            _profileRepository.Delete(id);
            return NoContent();
        }
    }
}