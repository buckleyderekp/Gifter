using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(p => p.Id == id);
        }

        public void Add(UserProfile profile)
        {
            _context.Add(profile);
            _context.SaveChanges();
        }

        public void Update(UserProfile profile)
        {
            _context.Entry(profile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var profile = GetById(id);
            _context.UserProfile.Remove(profile);
            _context.SaveChanges();
        }
    }
}